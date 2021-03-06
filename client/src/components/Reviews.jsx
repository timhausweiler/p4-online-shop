import React from "react";

export default function Reviews(props) {
  return (
    <div>
      {props.reviews &&
        props.reviews.map((review) => (
          <div key={review.id}>
            <p>
              <span>
                {review.title} ({review.stars} stars):
              </span>
              <br />
              {review.content}
              <br /> ({review.user.first_name} {review.user.last_name.charAt(0)}
              .)
            </p>
            {props.currentUser?.id === review.user_id ? (
              <span onClick={() => props.handleReviewDelete(review.id)}>
                Delete review <br />
              </span>
            ) : null}
            <br />
          </div>
        ))}
    </div>
  );
}
