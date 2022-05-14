const products = require("./../products.json");

module.exports = {
  allProducts: async (req, res) => {
    //MongoDB Commands
    // Fetch All Products
    res.send(products);
  },
  getSpecificProduct: async (req, res) => {
    const id = Number(req.params.id);
    // console.log(products);
    var reqProduct;
    products.forEach((product) => {
      console.log(product.id);
      if (product.id === id) {
        console.log("ID Matched");
        reqProduct = product;
      }
    });

    console.log(reqProduct);
    res.send(reqProduct);
  },
  create: async (req, res) => {
    res.send("Create function Connected");
  },
};
