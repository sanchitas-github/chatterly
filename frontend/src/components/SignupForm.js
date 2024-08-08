import React from 'react'
import './SignupForm.css'

const SignupForm = () => {
  return (
    <div className='signupbody'>
      <div className="signup-container">
        <div className="signup-form">
            <h2>Registration</h2>
            <form>
                <div className="input-group">
                    <input type={'Text'} id="name" placeholder="Enter your name😊"></input>
                </div>
                <div className="input-group">
                    <input type={'email'} id="email" placeholder="Enter your email📧"></input>
                </div>
                <div className="input-group">
                    <input type={'password'} id="password" placeholder="Create password🔐"></input>
                </div>
                
                <div className="terms">
                    <input type={'checkbox'} id="terms"></input>
                    <label for="terms">I accept all terms & conditions</label>
                </div>
                <button type={'submit'} className="signup-button"><a style={{color:"black"}} href='/home'>Register Now</a></button>
                <div className="login-link">
                    Already have an account? <a href="/">Login now</a>
                </div>
            </form>
        </div>
        <div className="signup-info">
            <h1 style={{fontFamily:"inherit", color:"black"}}>Start your beautiful journey</h1>
        </div>
    </div>
    </div>
  )
}

export default SignupForm
