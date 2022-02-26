import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductEdit(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");

  const { id } = useParams();

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
      />
      <input
        type="number"
        onChange={(e) => setPrice(e.target.valueAsNumber)}
        value={price}
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        type="text"
        onChange={(e) => setImage_url(e.target.value)}
        value={image_url}
      />
      <button>Edit</button>
    </form>
  );
}
