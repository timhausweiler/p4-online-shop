import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <Link to="/"><img src="https://i.imgur.com/4xb7ZYr.png" alt="store-logo" width="180px" /></Link>

      <Link to='/products'>All products</Link>
      <p>Pixel</p>
      <p>Nest</p>
      <p>Stadia</p>
      <p>Fitbit</p>
      <p>Pixelbook</p>
      <Link to="/"><img src="https://i.imgur.com/LIOEOFs.png" alt="question-mark" width="20px" /></Link>
      <Link to="/"><img src="https://i.imgur.com/hRoLMcz.png" alt="question-mark" width="20px" /></Link>
      <Link to="/"><img src="https://i.imgur.com/FqEblwK.png" alt="question-mark" width="20px" /></Link>
      {props.currentUser ?
        <>
        {/* <h3>{props.currentUser.first_name.substring(0,1)}{props.currentUser.last_name.substring(0,1)}</h3> */}
        <h3 onClick={props.logout}>{props.currentUser.first_name.substring(0,1)}{props.currentUser.last_name.substring(0,1)}</h3>
        </>
        :
        <>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </>
      }
    </div>
  )
}
