import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navBar'>
      <div className="container">
        <div className="logo">

        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/new">New Post</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar