/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React,{Component} from "react"
import Backdrop from './backdrop/Backdrop'
import SideDrawer from './sideDrawer/SideDrawer'

import NavBar from "./navBar/navBar"
import "./layout3.css"
import twitterIcon from '../images/twittercopy.png'


class Layout extends Component {
  state={
    sideDrawerOpen:false
  }
  
  drawerToggleClickHandler=()=>{
    this.setState((prev)=>{
      return{sideDrawerOpen:!prev.sideDrawerOpen}
    })
  }

  backdropClickHandler=()=>{
    this.setState({sideDrawerOpen:false});
  }
  render(){
    const { children } = this.props;
    let backDrop;
    if(this.state.sideDrawerOpen){
      backDrop=<Backdrop click={this.backdropClickHandler}/>;
    }
    return(
      <>
        <div style={{height:'100%'}}>
          <NavBar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            marginTop: '8rem',
          }}
        >
          <main>{children}</main>
          <div style={{textAlign:'center',marginTop:'2rem',borderTop:'0.05rem solid'}}>
            <p style={{marginTop:'3rem',marginBottom:'1rem'}}><strong>The space for truth. Home of the center.</strong></p>
            <a href="https://twitter.com/thetruspace"rel="noopener noreferrer" target="_blank">
              <img src={twitterIcon} alt='twitter' style={{marginBottom:'0.8rem'}} title='@thetruspace'/>
            </a>
            <footer>          
              Copyright © {new Date().getFullYear()} Thetruspace | All Rights Reserved
            </footer>
          </div>

        </div>
      </>

    )}
}



export default Layout
