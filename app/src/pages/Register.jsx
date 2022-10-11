import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
      <div className="form-container">
        <h1>Register</h1>
      <form>
        <input required type='text' placeholder='Username' />
        <input required type='text' placeholder='First Name' />
        <input required type='text' placeholder='Last Name' />
        <input required type='email' placeholder='Email' />
        <input required type='password' placeholder='Password' />
        <input required type='password' placeholder='Confirm Password' />
        <button type='submit'>Register</button>
        <p>Oops an ERROR occured!</p>
        <span>Already have an account? <Link to='/login'>Sign In</Link></span>
      </form>
      </div>
      </div>
      
  )
}

export default Register