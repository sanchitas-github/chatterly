import React from 'react'
import './Header.css'






const Header = () => {
  return (
   <section>
    <header className=''>
        <div>
        <nav className="navbar">
      <div className="navbar-logo">
        <h2 className='head' style={{color:'black'}}>🎀Chatterly🎀</h2>
      </div>
      <div>
      <div className="navbar-logo">
        
      </div>
      
   
    </div>
    
      <div className="navbar-profile">
      <div className='button'>
      <div className="navbar-buttons">
      
      
      <a href='/'> <button className="btn login-btn" >Login</button></a> 
        
      <a href='/register'> <button className="btn1 signup-btn">Signup</button></a>
       
      </div>
      </div>
      <div className="navbar-logo">
        
       
      </div>
     
      
    
      </div>
     

    </nav>
    
        </div>
        
  
        <div className="nav2">
              <p className='para'>Filters👇</p>
              <div className="created">
                <p className="create">Created By</p>
                <select className="all">
                  <option value>All</option>
                </select>
              </div>
              <div className="created">
                <p className="create">Published Date</p>
                <select className="all">
                  <option value>Select Date</option>
                </select>
              </div>
              <div className="navbar-right">
                
               <input id="search" placeholder="Search🔎" className="navbar-search" />
    </div>

        </div>
    </header>
    <div>

    </div>
   </section>
  )
}

export default Header
