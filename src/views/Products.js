import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { ProductsContext } from "../store/ProductsContext";

function ProductList() {
  const { products, error, isLoading } = useContext(ProductsContext);
  // console.log("products :>> ", products);

  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState([]);
  // const url = "https://fakestoreapi.com/products";

  // useEffect(() => {
  // async function fetchData() {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);

  //     console.log("data :>> ", data);
  //   } catch (err) {
  //     setError(err);
  //   }
  // }
  //   fetchData();
  // }, []);

  //generate options from categories of the products for the dropdown
  useEffect(() => {
    const uniqueOptions = [
      ...new Set(products.map((product) => product.category)),
    ];
    setOptions(uniqueOptions);
  }, [products]);

  // // eventHandler for choosing option in Dropdown
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // filtered Products with property category
  const filteredProducts = products.filter((product) => {
    if (selectedValue === "") {
      return true;
    }
    return product.category === selectedValue;
  });

  return (
    <div className="container">
      <h1 className="text-center">MarxItUp : Happy Shopping</h1>
      <h2 className="text-center">Enjoy your shopping </h2>

      <br />
      {/* Dropdown Filter */}
      <select value={selectedValue} onChange={handleChange}>
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <div className="g-4 row row-cols-md-4 row-cols-1 ">
        {error && <p>{error.message}</p>}

        <>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </>
      </div>
      <p></p>
      <p></p>
      {/* <Footer /> */}
    </div>
  );
}

export default ProductList;
