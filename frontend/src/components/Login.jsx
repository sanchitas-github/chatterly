import React from "react";

import "./login.css";


const Login = () => {
  return (
    <>
    <div>
    <div className='signupbody'>
      <div className="signup-container">
        <div className="signup-form">
            <h2>Login</h2>
            <form>
                
                <div className="input-group">
                    <input type={'email'} id="email" placeholder="Enter your email📧"></input>
                </div>
                <div className="input-group">
                    <input type={'password'} id="password" placeholder="Enter your password🔐"></input>
                </div>
                
                
             <button type={'submit'} className="signup-button"><a style={{color:"black"}} href="/home" >Login Now</a></button>
                <div className="login-link">
                    Do not  have an account? <a href="/register">Register now</a>
                </div>
            </form>
        </div>
        <div className="signup-info">
            <h1 style={{fontFamily:"inherit", color:"black"}}>Welcome Back Dear❤️We are happy to see you again😊</h1>
        </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Login;
