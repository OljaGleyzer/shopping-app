import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error.message}</p>}
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <button>Show more</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
