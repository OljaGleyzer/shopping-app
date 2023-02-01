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

  // // push priduct data to firestore
  // const productData = fetchData();
  // db.collection("products")
  //   .add({
  //     name: productData.title,
  //     description: productData.description,
  //     id: productData.id,
  //     image: productData.image,
  //     price: productData.price,
  //   })
  //   .then((productRef) => {
  //     console.log("Product added with ID: ", productRef.id);

  //     // Add the comments sub-collection to the product document
  //     db.collection("products")
  //       .doc(productRef.id)
  //       .collection("comments")
  //       .add({
  //         text: "Great product!",
  //         timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
  //         author: "John Doe",
  //         productId: productRef.id,
  //       })
  //       .then((commentRef) => {
  //         console.log("Comment added with ID: ", commentRef.id);
  //       });
  //   });

  return { product, products, error, isLoading, setProducts };
}

export default useFetch;
