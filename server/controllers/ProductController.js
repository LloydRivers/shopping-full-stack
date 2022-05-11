const products = require("./../products.json");

module.exports = {
  allProducts: (req, res) => {
    res.send(products);
  },
  create: async (req, res) => {
    res.send("Create function Connected");
  },
};
