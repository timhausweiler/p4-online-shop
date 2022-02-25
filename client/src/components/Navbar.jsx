import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className='navbar-container'>
      <Link to="/">
        <img src="https://i.imgur.com/4xb7ZYr.png" alt="store-logo" width="180px" />
      </Link>
      <div className='category-container'>
        <Link to='/products'>All products</Link>
        <Link to="/">Pixel</Link>
        <Link to="/">Nest</Link>
        <Link to="/">Stadia</Link>
        <Link to="/">Fitbit</Link>
        <Link to="/">Pixelbook</Link>
      </div>
      <div className='symbol-container'>
        <Link to="/">
          <img src="https://i.imgur.com/LIOEOFs.png" alt="question-mark" width="20px" />
        </Link>
        <Link to="/">
          <img src="https://i.imgur.com/hRoLMcz.png" alt="question-mark" width="20px" />
        </Link>
        <Link to="/">
          <img src="https://i.imgur.com/FqEblwK.png" alt="question-mark" width="20px" />
        </Link>
      </div>
      {props.currentUser ?
        <>
          <h3 onClick={props.logout} className = "log-out">
            {props.currentUser.first_name.substring(0, 1)}{props.currentUser.last_name.substring(0, 1)}
          </h3>
        </>
        :
        <>
        <Link to='/register'className='register-button'>Register</Link>
        </>
      }
    </div>
  )
}
