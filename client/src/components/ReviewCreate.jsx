import { useState } from "react"

export default function ReviewCreate(props) {
  const [title, setTitle] = useState("")
  const [stars, setStars] = useState(0)
  const [content, setContent] = useState("")  

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const review = {
        title,
        stars,
        content
      }
      props.handleReviewCreate(review)
    }}>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <input type="number" value={stars} onChange={(e) => setStars(e.target.valueAsNumber)} />
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <button>Review it!</button>
    </form>
  )
}
