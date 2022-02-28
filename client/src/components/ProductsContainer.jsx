import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  getAllProducts,
  deleteProduct,
  updateProduct,
} from "../services/products";
import { createProduct } from "../services/products";
import { AZ, ZA, lowestFirst, highestFirst } from "../utils/sort";

import ProductDetail from "./ProductDetail";
import Products from "./Products";
import ProductCreate from "./ProductCreate";
import ProductEdit from "./ProductEdit";

export default function ProductsContainer(props) {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("name-ascending");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
      setSearchResult(products);
    };
    fetchProducts();
  }, [toggle]);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setToggle((prevToggle) => !prevToggle);
    navigate("/products");
  };

  const handleCreate = async (formData) => {
    await createProduct(formData);
    setToggle((prevToggle) => !prevToggle);
    navigate("/products");
  };

  const handleEdit = async (id, formData) => {
    await updateProduct(id, formData);
    setToggle((prevToggle) => !prevToggle);
    navigate(`/products/${id}`);
  };

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        console.log(searchResult);
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        console.log(searchResult);
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        console.log(searchResult);
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        console.log(searchResult);
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = (event) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
    setApplySort(true);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              searchResult={searchResult}
              currentUser={props.currentUser}
              handleDelete={handleDelete}
              onSubmit={handleSubmit}
              handleSearch={handleSearch}
              handleSort={handleSort}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <ProductDetail
              searchResult={searchResult}
              handleDelete={handleDelete}
              currentUser={props.currentUser}
            />
          }
        />
        <Route
          path="/create"
          element={<ProductCreate handleCreate={handleCreate} />}
        />
        <Route
          path="/:id/edit"
          element={
            <ProductEdit
              products={products}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          }
        />
      </Routes>
    </div>
  );
}
