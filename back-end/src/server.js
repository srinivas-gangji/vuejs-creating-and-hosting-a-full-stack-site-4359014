import express from "express";
import bodyParser from "body-parser";
import {
  products as productsRaw,
  cartItems as cartItemsRaw,
} from "./temp-data.js";

let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;
  const product = products.find((p) => p.id === productId);
  res.json(product);
});

function populateCartIds(ids) {
  const cartProducts = ids.map((id) => products.find((p) => p.id === id));

  return cartProducts;
}

app.get("/cart", (req, res) => {
  const cartProducts = populateCartIds(cartItems);

  res.json(cartProducts);
});

app.post("/cart", (req, res) => {
  const { productId } = req.body;
  const product = products.find((p) => parseInt(p.id, 10) === productId);
  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }
  cartItems.push(product.id);
  const cartProducts = populateCartIds(cartItems);

  res.json(cartProducts);
});

app.delete("/cart/:productId", (req, res) => {
  const { productId } = req.params;
  cartItems = cartItems.filter(
    (id) => parseInt(id, 10) !== parseInt(productId, 10)
  );

  const cartProducts = populateCartIds(cartItems);
  res.json(cartProducts);
});

app.listen(3009, () => {
  console.log("Server running on port 3009");
});
