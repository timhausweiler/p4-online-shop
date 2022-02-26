import { useState } from "react";

export default function ReviewCreate(props) {
  const [title, setTitle] = useState("");
  const [stars, setStars] = useState(0);
  const [content, setContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const review = {
          title,
          stars,
          content,
        };
        props.handleReviewCreate(review);
        props.setOpenToggle((prevToggle) => !prevToggle);
      }}
    >
      <h5>Title</h5> <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="user-input-field"
      />
      <br />
      <h5>Stars</h5>
      <br />
      <input
        type="number"
        value={stars}
        onChange={(e) => setStars(e.target.valueAsNumber)}
        className="user-input-field"
      />
      <br />
      <h5>Review</h5> <br />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="user-input-field"
      />
      <br />
      <br />
      <button>Submit review</button>
    </form>
  );
}
