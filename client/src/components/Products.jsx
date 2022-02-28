import React from "react";
import { Link } from "react-router-dom";
import Sort from "./Sort";
import Search from "./Search";

  return (
    <div className="master-card-container">
      <h2>Browse all offers.</h2>
      <Search onSubmit={props.handleSubmit} handleSearch={props.handleSearch} />
      <Sort onSubmit={props.handleSubmit} handleSort={props.handleSort} />
      <div className="card-container">
        {props.searchResult.map((product) => (
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
