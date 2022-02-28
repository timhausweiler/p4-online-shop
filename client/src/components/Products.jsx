import React from "react";
import { Link } from "react-router-dom";
import Sort from "./Sort";

export default function Products(props) {
  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => event.preventDefault();

  return (
    <div className="master-card-container">
      <h2>Browse all offers.</h2>
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
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
