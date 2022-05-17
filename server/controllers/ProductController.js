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
    const id = req.params.id;

    const reqProduct = await Product.findOne({ _id: id });
    res.send(reqProduct);
  },
  create: async (req, res) => {
    res.send("Create function Connected");
  },
};
