const products = require("./../products.json");

module.exports = {
  allProducts: async (req, res) => {
    //MongoDB Commands
    // Fetch All Products
    res.send(products);
  },
  create: async (req, res) => {
    res.send("Create function Connected");
  },
};
