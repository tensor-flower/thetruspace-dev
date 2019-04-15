import React from 'react'
import { Link } from "gatsby"
import './sideDrawer.css'

const SideDrawer =props=> {
  let drawerClasses='sideDrawer';
  if(props.show){drawerClasses='sideDrawer open'}
    return (
      <nav className={drawerClasses}>
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
          </ul>
      </nav>
    )
}
export default SideDrawer;