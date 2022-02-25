import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      {props.currentUser ?
        <>
          <h3>Welcome, {props.currentUser.username}!</h3>
          <button onClick={props.logout}>Log Out</button>
        </>
        :
        <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </>
      }
      <Link to='/products'>Products</Link>
    </div>
  )
}
