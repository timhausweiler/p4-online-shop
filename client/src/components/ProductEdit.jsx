import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteProduct } from "../services/products";
import { useNavigate } from "react-router-dom";

export default function ProductEdit(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const handleProductDelete = async (review_id) => {
    await deleteProduct(id, review_id);
    navigate("/products");
  };

  useEffect(() => {
    const foundProduct = props.products.find((product) => {
      return product.id === parseInt(id);
    });
    if (foundProduct) {
      setTitle(foundProduct?.title);
      setPrice(foundProduct?.price);
      setDescription(foundProduct?.description);
      setImage_url(foundProduct?.image_url);
    }
  }, [id, props.products]);

  return (
    <>
      <h2>Edit your product.</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const product = {
            title,
            price,
            description,
            image_url,
          };
          props.handleEdit(id, product);
        }}
      >
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="input-field"
        />{" "}
        <input
          type="number"
          onChange={(e) => setPrice(e.target.valueAsNumber)}
          value={price}
          className="input-field"
        />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="input-field"
        />
        <br />
        <img src={image_url} className="detail-image" />
        <br />
        <input
          type="text"
          onChange={(e) => setImage_url(e.target.value)}
          value={image_url}
          className="input-field"
        />
        <br />
        <br />
        <button>Save</button>
        <p onClick={(e) => handleProductDelete(id)}>Delete</p>
      </form>
    </>
  );
}
