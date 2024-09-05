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

app.get("/cart", (req, res) => {
  res.json(cartItems);
});

app.post("/cart", (req, res) => {
  const { productId } = req.body;
  const product = products.find((p) => parseInt(p.id, 10) === productId);
  cartItems.push(product);
  res.json(cartItems);
});

app.delete("/cart/:productId", (req, res) => {
  const { productId } = req.params;
  cartItems = cartItems.filter(
    (p) => parseInt(p.id, 10) !== parseInt(productId, 10)
  );
  res.json(cartItems);
});

app.listen(3009, () => {
  console.log("Server running on port 3009");
});
