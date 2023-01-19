import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { title, image, category, price } = product;
  console.log("product", product);
  return (
    <Card style={{ height: "30em", overflow: "auto" }} className="col">
      <div className="cardlist-card">
        <Card.Img
          style={{ height: "15em", width: "auto" }}
          variant="top"
          src={image}
          className="card-img-top"
        />
        <Card.Body className="text-overflow">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="card-text">
            {price} {"€"}
          </Card.Text>
          <Card.Text className="card-text">{category}</Card.Text>
          <Link to={`/product/${product.id}`}>
            <Button variant="primary" className="btn btn-primary">
              Show More{" "}
            </Button>
          </Link>
        </Card.Body>
      </div>
    </Card>
  );
}

export default ProductCard;
