import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);

  const URL = "http://localhost:4000/";
  const getData = () => {
    axios
      .get(URL)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Section
        data={data
          .filter((obj) => obj.category === "men's clothing")
          .slice(0, 4)}
        title={"Men's Clothing"}
      />
      <Section
        data={data.filter((obj) => obj.category === "jewelery").slice(0, 4)}
        title={"Jewelery"}
      />
      <Section
        data={data.filter((obj) => obj.category === "electronics").slice(0, 4)}
        title={"Electronics"}
      />
      <Section
        data={data
          .filter((obj) => obj.category === "women's clothing")
          .slice(0, 4)}
        title={"Women's clothing"}
      />
    </>
  );
}

export default HomePage;
