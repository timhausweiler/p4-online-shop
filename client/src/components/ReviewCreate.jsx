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
      Title <br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      Stars <br />
      <input
        type="number"
        value={stars}
        onChange={(e) => setStars(e.target.valueAsNumber)}
      />
      <br />
      Review <br />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button>Submit review</button>
    </form>
  );
}
