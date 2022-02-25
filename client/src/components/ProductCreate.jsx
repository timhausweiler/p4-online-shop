import { useState } from 'react'

export default function ProductCreate(props) {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image_url, setImage_url] = useState('')
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const product = {
        title,
        price,
        description,
        image_url
      }
      props.handleCreate(product);
    }}>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type='number'
        onChange={(e) => setPrice(e.target.valueAsNumber)}
        value={price}
      />
      <input
        type='text'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        type='text'
        onChange={(e) => setImage_url(e.target.value)}
        value={image_url}
      />
      <button>Create</button>
    </form>
  )
}
