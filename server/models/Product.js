//Step1: Import
const mongoose = require("mongoose");

//Step2: Make Schema
let ProductSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    rating: {
      type: Object,
    },
  },
  {
    collection: "products",
  }
);

// Step3: Modal assignemnt
const model = mongoose.model("Product", ProductSchema);

//Step4: Exporting Model
module.exports = model;
