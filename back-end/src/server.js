import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { MongoClient, ServerApiVersion } from "mongodb";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function start() {
  const uri =
    "mongodb+srv://srigd:eyuzN2TGdTGX6bJs@linkedin-vuejscourse-01.jkxpp.mongodb.net/?retryWrites=true&w=majority&appName=linkedin-vuejscourse-01";
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  const db = client.db("fsv-db");

  const app = express();
  app.use(bodyParser.json());
  //static folder
  console.log(path.join(__dirname, "../assets"));
  app.use("/images", express.static(path.join(__dirname, "../assets")));

  app.use(
    express.static(path.join(__dirname, "../dist"), {
      maxAge: "1y",
      etag: false,
    })
  );

  app.get("/status", (req, res) => {
    res.send("I am alive");
  });

  app.get("/api/products", async (req, res) => {
    try {
      const products = await db.collection("products").find({}).toArray();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:productId", async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await db
        .collection("products")
        .findOne({ id: productId });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  async function populateCartIds(ids) {
    return Promise.all(
      ids.map(async (id) => {
        const product = await db.collection("products").findOne({ id });
        return product;
      })
    );
  }

  app.get("/api/users/:userId/cart", async (req, res) => {
    try {
      const user = await db
        .collection("users")
        .findOne({ id: req.params.userId });
      const cartProducts = await populateCartIds(user.cartItems);
      res.json(cartProducts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cart items" });
    }
  });

  app.post("/api/users/:userId/cart", async (req, res) => {
    const { productId } = req.body;

    const existingUser = await db
      .collection("users")
      .findOne({ id: req.params.userId });

    if (!existingUser) {
      await db
        .collection("users")
        .insertOne({ id: req.params.userId, cartItems: [] });
    }

    try {
      await db
        .collection("users")
        .updateOne(
          { id: req.params.userId },
          { $addToSet: { cartItems: productId.toString() } }
        );
      const user = await db
        .collection("users")
        .findOne({ id: req.params.userId });
      const cartProducts = await populateCartIds(user.cartItems);
      res.json(cartProducts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to add product to cart" });
    }
  });

  app.delete("/api/users/:userId/cart/:productId", async (req, res) => {
    const { productId, userId } = req.params;

    try {
      await db
        .collection("users")
        .updateOne(
          { id: userId },
          { $pull: { cartItems: productId.toString() } }
        );
      const user = await db
        .collection("users")
        .findOne({ id: req.params.userId });
      const cartProducts = await populateCartIds(user.cartItems);
      res.json(cartProducts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to remove product from cart" });
    }
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
  });

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log("Server running on port 8080");
  });
}

start();
