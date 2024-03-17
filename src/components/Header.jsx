import React from 'react';
const Title = () => {
    return (
      <a href="/">
        <img className="logo" src="https://i.pinimg.com/564x/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.jpg" alt="Food fire Logo" />
      </a>
    );
  };
  
  // Header component for header section : Logo, Nav Items 
  
  const Header = ()=>{
      return(
          <div className="header">
            <Title/>
            <div className ="nav-items">
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Cart</li>
              </ul>
            </div>
          </div>
      );
  };
  
export default Header;