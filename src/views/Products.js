import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log("data :>> ", data);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h1>Marx it up : Happy Shopping</h1>
      <p></p>
      <div className="g-4 row row-cols-md-4 row-cols-1 ">
        {error && <p>{error.message}</p>}
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
