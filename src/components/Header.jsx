import React from 'react'
import {} from "react-bootstrap";
import logo from "./images/logo.svg";
import "./styles/Header.css"
const Header = () => {
  return (
<>
    <div className="container">
      <img src={logo} alt="logo" className='logoSNTC' width={"150px"}/>
    </div>
</>
  )
}

export default Header
