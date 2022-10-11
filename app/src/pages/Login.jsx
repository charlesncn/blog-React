import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='auth'>
      <div className="form-container">
        <h1>Login</h1>
      <form>
        <input required type='text' placeholder='Username' />
        <input required type='password' placeholder='Password' />
        <button type='submit'>Login</button>
        <p>Oops an ERROR occured!</p>
        <span>Don't have an account? <Link to='/register'>Sign Up</Link></span>
      </form>
      </div>
      </div>
      
  )
}

export default Login