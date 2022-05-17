const mongoose = require("mongoose");

//Importing Models
const Product = require("./../models/Product");

module.exports = {
  allProducts: async (req, res) => {
    //MongoDB Commands
    // Empty curly brackets, when fetching all
    const products = await Product.find({});
    // Fetch All Products
    res.send(products);
  },
  getSpecificProduct: async (req, res) => {
    const id = Number(req.params.id);

    var reqProduct;
    products.forEach((product) => {
      console.log(product.id);
      if (product.id === id) {
        console.log("ID Matched");
        reqProduct = product;
      }
    });

    res.send(reqProduct);
  },
  create: async (req, res) => {
    res.send("Create function Connected");
  },
};
