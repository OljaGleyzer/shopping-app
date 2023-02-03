import { createContext } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

export const ProductsContext = createContext();
export const ProductsContextProvider = (props) => {
  //Put here the state and functions you want to share
  console.log("product context run");

  const url = "https://fakestoreapi.com/products";
  const { products, error, isLoading, setProducts } = useFetch();
  console.log(
    "CONTEXT: products, error, isLoading :>> ",
    products,
    error,
    isLoading
  );
  return (
    <ProductsContext.Provider value={{ products, error, isLoading }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
