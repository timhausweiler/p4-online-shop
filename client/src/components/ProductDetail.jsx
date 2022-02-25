import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Reviews from "./Reviews";
import ReviewCreate from "./ReviewCreate";
import {
  getProductReviews,
  createReview,
  deleteReview,
} from "../services/reviews";

export default function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [openToggle, setOpenToggle] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = props.products.find((product) => {
      return product.id === parseInt(id);
    });

    const fetchReviews = async () => {
      const reviews = await getProductReviews(id);
      setReviews(reviews);
    };
    fetchReviews();
    setProduct(foundProduct);
  }, [id, props.products, toggle]);

  const handleReviewCreate = async (formData) => {
    await createReview(id, formData);
    setToggle((prevToggle) => !prevToggle);
  };

  const handleReviewDelete = async (review_id) => {
    await deleteReview(id, review_id);
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="detail-master-container">
      <div className="detail-container">
        {product?.id ? (
          <>
            <img src={product.image_url} className="detail-image" />
            <div className="detail-info">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="checkout-info">
                <h3 className="detail-price">${product.price}</h3>
                <button className="buy-button">Buy</button>
              </div>
            </div>
            {/* {
                props.currentUser?.id === product.user_id ?
                <>
                <Link to={`/products/${product.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => props.handleDelete(product.id)}>Delete</button>
                </>
                :
                null
              } */}
          </>
        ) : (
          <h3>Sorry, no product found.</h3>
        )}
      </div>
      <h2>See what others had to say about it.</h2>
      <Reviews
        reviews={reviews}
        currentUser={props.currentUser}
        handleReviewDelete={handleReviewDelete}
      />
      <span
        onClick={(e) => setOpenToggle((prevToggle) => !prevToggle)}
        className="review-opener"
      >
        Are you a fan too? Leave a review.
      </span>
      {openToggle ? (
        <ReviewCreate
          handleReviewCreate={handleReviewCreate}
          setOpenToggle={setOpenToggle}
        />
      ) : null}
    </div>
  );
}
