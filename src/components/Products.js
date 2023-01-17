import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

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
    <div className="container ">
      <h1 className="">Marx it up : Happy Shopping</h1>
      <div className="g-4 row row-cols-md-4 row-cols-1">
        {error && <p>{error.message}</p>}
        {products.map((product) => (
          <div key={product.id}>
            {/* <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <button>Show more</button> */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
