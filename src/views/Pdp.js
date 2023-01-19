import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Pdp() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log("id :>> ", id);

  const fetchDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log("data :>> ", data);
      if (data && data.length) {
        console.log("Productdata :>> ", data);
        setProduct(data);
        setIsLoading(false);
      } else {
        setError("No Product found");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
      setError(error);
      setIsLoading(false);
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
      {isLoading ? (
        <p>Loading...</p>
      ) : product ? (
        <>
          <h1> Product: {product.title}</h1>
          <p>Text: {product.description}</p>
          <p>Price: {product.price}</p>
        </>
      ) : (
        <p>No product found</p>
      )}
      {error && <p>CatchError: {error}</p>}
    </div>
  );
}

export default Pdp;
