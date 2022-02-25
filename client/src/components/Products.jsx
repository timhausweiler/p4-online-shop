import React from 'react'
import {Link} from 'react-router-dom'

export default function Products(props) {
  return (
    <div className='master-card-container'>
      <h2>Browse all offers.</h2>
    <div className='card-container'>
      {/* { props.currentUser &&
        <Link to='/products/create'>Create A Product!!</Link>
      } */}
      {
      props.products.map(product => (
        <Link key={product.id} to={`/products/${product.id}`} className='card'>
          <img src={product.image_url} alt={product.title} />
          <h3 className='card-title'>{product.title}</h3>
          <h4 className='card-price'>From ${product.price}</h4>
        </Link>
      ))
      }
    </div>
  </div>
  )
}
