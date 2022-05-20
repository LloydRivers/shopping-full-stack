import React, { useEffect, useState } from "react";
import "../productStyling/product-details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, ProductTile } from "./DetailsPage.styled";

function DetailsPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const URL = `http://localhost:4000/products/${id}`;
  const getProductsById = () => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  };

  // Retrieve parameter MUST BE THE SAME defined on the Route

  useEffect(() => {
    getProductsById();
  }, []);
  return (
    <div className="container">
      {product ? (
        <div className="box-shadow border-radius col-12 col-md-10 col-lg-8 border p-3 main-section bg-white">
          <div className="row m-0">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 left-side-product-box pb-3">
              <img
                src={product.image}
                className="border-radius border p-3"
                alt="product"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
              <div className="border-radius right-side-pro-detail border p-3 m-0">
                <div className="row ">
                  <div className="col-12 col-lg-12">
                    <ProductTile className="m-0 p-0">
                      {product.title}
                    </ProductTile>
                  </div>
                  <div className="col-12 col-lg-12">
                    <p className="my-2 p-0 price-pro">${product.price}</p>
                    <hr className="p-0 m-0" />
                  </div>

                  <div className="col-12 col-lg-12 mt-3">
                    <div className="row">
                      <div>
                        <Button backgroundColor={"#f9eeea"} color={"#d93f0b"}>
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12 pt-2">
                    <h5>Product Detail</h5>
                    <span>{product.description}</span>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3>...Loading</h3>
      )}
    </div>
  );
}

export default DetailsPage;
