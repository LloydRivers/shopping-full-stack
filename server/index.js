const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/mern-app",
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connection Successful");
    }
  }
);

// Importing Controllers
const productController = require("./controllers/ProductController");

app.get("/", productController.allProducts);
// app.get("/blahblah", productController.create);

app.listen(4000);

//start: 'node'
