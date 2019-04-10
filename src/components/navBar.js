import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.png"

const navBar = () => (
    <nav>
        <Link to="/">
            <img
                src={logo} 
                style={{width:'300px',marginBottom:'0'}} 
                alt='logo'/>
        </Link>
        <ul>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/about" className='nav-link'>About</Link></li>
        </ul>
    </nav>
)

export default navBar
