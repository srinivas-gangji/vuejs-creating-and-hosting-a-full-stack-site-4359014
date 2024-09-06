import express from "express";
import bodyParser from "body-parser";

import { MongoClient, ServerApiVersion } from "mongodb";

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

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/products", async (req, res) => {
    try {
      const products = await db.collection("products").find({}).toArray();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/products/:productId", async (req, res) => {
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

  app.get("/users/:userId/cart", async (req, res) => {
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

  app.post("/users/:userId/cart", async (req, res) => {
    const { productId } = req.body;

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

  app.delete("/users/:userId/cart/:productId", async (req, res) => {
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

  app.listen(3009, () => {
    console.log("Server running on port 3009");
  });
}

start();
