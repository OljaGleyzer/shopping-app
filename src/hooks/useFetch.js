import React from "react";
import { useEffect, useState } from "react";
import { db } from "../config/firebaseconfig";

function useFetch(id) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchData(id) {
      if (!id) {
        console.log("id with undefined", id);
        try {
          console.log("try 17");
          const response = await fetch(url);
          const data = await response.json();

          setProducts(data);
        } catch (err) {
          console.log("error :>> ", error);
          setError(err);
        }
      } else {
        if (!isNaN(Number(id)) && id < 21 && id > 0) {
          console.log("id line 26 :>> ", id);
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
              console.log("else 41");
              setError("No Product found");
              setIsLoading(false);
            }
          } catch (error) {
            console.log("error", error);
            setIsLoading(false);
          }
        } else {
          console.log("else 47");
          setError("This ID is invalid");
          // alert("id is invalid");
          setIsLoading(false);
        }
      }
    }
    fetchData(id);
  }, [id]);

  return { product, products, error, isLoading, setProducts };
}

export default useFetch;
