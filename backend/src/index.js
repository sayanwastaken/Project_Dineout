const express = require("express");
const restController = require("./controllers/restaurants.controller");
const orderController = require("./controllers/order.controller");

const app = express();

app.use(express.json());

app.use("/restaurants", restController);
app.use("/orders", orderController);

module.exports = app;
