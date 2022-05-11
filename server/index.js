const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Importing Controllers
const productController = require("./controllers/ProductController");

app.get("/", productController.allProducts);
// app.get("/blahblah", productController.create);

app.listen(4000);

//start: 'node'
