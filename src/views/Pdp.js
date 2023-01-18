import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Pdp() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log("data :>> ", data);
      setProduct(data[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  //   useEffect(() => {
  //     async function fetchProduct() {
  //       try {
  //         const response = await fetch("https://fakestoreapi.com/products/${id}");
  //         const data = await response.json();
  //         setProduct(data[0]);

  //         console.log("ProductData:>> ", data);
  //       } catch (err) {
  //         setError(err);
  //       }
  //     }
  //     fetchProduct();
  //   }, [id]);

  return (
    <div>
      {product ? (
        <>
          <h1> Product: {product.title}</h1>
          <p>Text: {product.description}</p>
          <p>Price: {product.price}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Pdp;
