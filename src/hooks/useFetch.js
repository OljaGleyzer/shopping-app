import React from "react";
import { useEffect, useState } from "react";

function useFetch(id) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchData() {
      if (id === undefined) {
        try {
          const response = await fetch(url);
          const data = await response.json();

          setProducts(data);
        } catch (err) {
          setError(err);
        }
      } else {
        if (!isNaN(Number(id)) && id < 21 && id > 0) {
          try {
            setIsLoading(true);
            const response = await fetch(
              `https://fakestoreapi.com/products/${id}`
            );
            const data = await response.json();
            console.log("data :>> ", data);
            if (data) {
              console.log("Productdata :>> ", data);
              setProduct(data);
              setIsLoading(false);
            } else {
              setError("No Product found");
              setIsLoading(false);
            }
          } catch (error) {
            console.log("error", error);
            setIsLoading(false);
          }
        } else {
          setError("This ID is invalid");
          setIsLoading(false);
        }
      }
    }
    fetchData();
  }, []);

  return { product, products, error, isLoading, setProducts };
}

export default useFetch;
