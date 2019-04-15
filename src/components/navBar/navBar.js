import { Link } from "gatsby"
import React from "react"
import logo from "../../images/logo.png"
import './navBar.css'
import Burger from '../sideDrawer/Burger';

const navBar =props =>(
    <header className='toolbar'>
        <nav className='toolbar-nav'>
            <div className='toggle-toolBar'>
                <Burger click={props.drawerClickHandler}/>
            </div>
            <Link to="/">
                <img
                    src={logo} 
                    /*style={{width:'300px',marginBottom:'0',float:'left'}} */
                    style={{padding:0}}
                    className='logo'
                    title='thetruspace'
                    alt='logo'/>
            </Link>
            <div className='spacer'/>
            <div className='toolbar-items'>
                <ul>
                    <li><Link className='menu' to="/">Home</Link></li>
                    <li><Link className='menu' to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default navBar
