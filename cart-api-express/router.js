const express = require("express");
const cartRoutes = express.Router();

const cart = [
  { id: 0, product: "jelly", price: 1, quantity: 10 },
  { id: 1, product: "jam", price: 1.5, quantity: 10 },
  { id: 2, product: "marmalade", price: 2, quantity: 10 }
];
let nextId = 3;

cartRoutes.get("/cart-items", (req, res) => {
  res.status(200);
  res.json(cart);
});
cartRoutes.get("/cart-items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = cart.find(i => i.id === id);
  if (item) {
    res.status(200);
    res.json(item);
  } else {
    res.status(404);
    res.send("ID not found");
  }
});
cartRoutes.post("/cart-items", (req, res) => {
  const item = req.body;
  item.id = nextId++;
  cart.push(item);
  res.status(201);
  res.json(item);
});
cartRoutes.put("/cart-items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = req.body;
  item.id = id;
  const index = cart.findIndex(i => i.id === id);
  cart.splice(index, 1, item);
  res.status(200);
  res.json(item);
});
cartRoutes.delete("/cart-items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = cart.findIndex(i => i.id === id);
  if (index !== -1) cart.splice(index, 1);
  res.status(204);
  res.json();
});

module.exports = cartRoutes;
