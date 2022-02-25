import React from 'react'
import {Link} from 'react-router-dom'

export default function Products(props) {
  return (
    <div>
      { props.currentUser &&
        <Link to='/products/create'>Create A Product!!</Link>
      }
      {
      props.products.map(product => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <img src={product.image_url} />
          <h4>{product.title}</h4>
        </Link>
      ))
      }
    </div>
  )
}
