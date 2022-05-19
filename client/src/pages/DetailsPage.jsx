import React, { useEffect, useState } from "react";
import "../productStyling/product-details.css";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        <div className="col-12 col-md-10 col-lg-8 border p-3 main-section bg-white">
          <div className="row m-0">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 left-side-product-box pb-3">
              <img src={product.image} className="border p-3" />
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  <div className="col-12 col-lg-12">
                    <span>Who What Wear</span>
                    <p className="m-0 p-0">{product.title}</p>
                  </div>
                  <div className="col-12 col-lg-12">
                    <p className="m-0 p-0 price-pro">{product.price}</p>
                    <hr className="p-0 m-0" />
                  </div>
                  <div className="col-12 col-lg-12 pt-2">
                    <h5>Product Detail</h5>
                    <span>{product.description}</span>
                    <hr className="m-0 pt-2 mt-2" />
                  </div>

                  <div className="col-12 col-lg-12">
                    <h6>Quantity :</h6>
                    <input
                      type="number"
                      className="form-control text-center w-100"
                      value="1"
                    />
                  </div>
                  <div className="col-12 col-lg-12 mt-3">
                    <div className="row">
                      <div className="col-lg-6 pb-2">
                        <button className="btn btn-danger w-100">
                          Add To Cart
                        </button>
                      </div>
                      <div className="col-12 col-lg-6">
                        <button className="btn btn-success w-100">
                          Shop Now
                        </button>
                      </div>
                    </div>
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
