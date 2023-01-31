import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import Comments from "../components/Comments";

function Pdp() {
  // const [product, setProduct] = useState({});
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log("useParams()", useParams());

  const { product, error, isLoading, setProducts } = useFetch(id);

  // const fetchDetails = async () => {
  //   if (!isNaN(Number(id)) && id < 21 && id > 0) {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //       const data = await response.json();
  //       console.log("data :>> ", data);
  //       if (data) {
  //         console.log("Productdata :>> ", data);
  //         setProduct(data);
  //         setIsLoading(false);
  //       } else {
  //         setError("No Product found");
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //       setIsLoading(false);
  //     }
  //   } else {
  //     setError("This ID is invalid");
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchDetails();
  // }, [id]);

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
          <div className="container">
            <h1 className="text-center"> {product.title}</h1>
            <img
              className="container d-flex justify-content-center"
              src={product.image}
              style={{ height: "30em", width: "auto" }}
            ></img>
            <p></p>
            <p>Description: {product.description}</p>
            <h5>Price: {product.price} €</h5>
            <div className=" align-items-baseline">
              <Button variant="primary">Buy Me</Button>
            </div>
          </div>
          <Comments />
        </>
      ) : (
        <p>No product found</p>
      )}
      {error && <p>CatchError: {error}</p>}
    </div>
  );
}

export default Pdp;
