import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className='master-navbar-container'>
    <div className='navbar-container'>
      <div className='left-container'>
      <Link to="/" className='logo-container'>
        <img src="https://www.shareicon.net/data/512x512/2016/11/22/854956_search_512x512.png" alt="store-logo" className='logo'/>Google Store
      </Link>
      <div className='category-container'>
        <Link to='/products' className='category'>All products</Link>
        <Link to="/" className='category'>Pixel</Link>
        <Link to="/" className='category'>Nest</Link>
        <Link to="/" className='category'>Stadia</Link>
        <Link to="/" className='category'>Fitbit</Link>
        <Link to="/" className='category'>Pixelbook</Link>
      </div>
      </div>

      <div className='right-container'>
      <div className='symbol-container'>
        <Link to="/" className='symbol'>
          <img src="https://i.imgur.com/LIOEOFs.png" alt="question-mark" width="18px" />
        </Link>
        <Link to="/" className='symbol'>
          <img src="https://i.imgur.com/hRoLMcz.png" alt="question-mark" width="18px" />
        </Link>
        <Link to="/" className='symbol'>
          <img src="https://i.imgur.com/FqEblwK.png" alt="question-mark" width="18px" />
        </Link>
        </div>
      {props.currentUser ?
        <>
          <h3 onClick={props.logout} className = "log-out">
                {props.currentUser.first_name.substring(0, 1).toUpperCase()}
          </h3>
        </>
        :
        <>
        <Link to='/register'className='category'>Register</Link>
        </>
      }
      </div>
      </div>
    </div>
  )
}
