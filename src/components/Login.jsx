import React from 'react'
import './Login.scss'

function Login() {
  return (
    <div className="wrapper">
     <div className="login">
      <h1 className='login__title'>Registered Customers</h1>
       <p className='login__subtitle'>If you have an account, sign in with your email address.</p>
       <form className='login__form' action="">
        <label className='login__form-label' htmlFor="email">Email <span>*</span></label>
        <input className='login__form-input' type="text" id='email' placeholder='Your Email' />
        
        <label className='login__form-label' htmlFor="password">Password <span>*</span></label>
        <input className='login__form-input' type="password" id='password' placeholder='Your Password' />

        <div className="login__footer">
          <input className='login__form-submit' type="submit" value="Submit" />
          <a className='login__form-forgot' href="">Forgot Your Password</a>
        </div>        
       </form>
     </div>
    </div>
  )
}

export default Login