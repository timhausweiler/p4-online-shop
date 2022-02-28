import React from "react";
import { Link } from "react-router-dom";

export default function Products(props) {
  return (
    <div className="master-card-container">
      <h2>Browse all offers.</h2>
      <div className="card-container">
        {props.products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card"
            style={{ textDecoration: "none" }}
          >
            <img src={product.image_url} alt={product.title} />
            <h3 className="card-title">{product.title}</h3>
            <p className="card-price">From ${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
