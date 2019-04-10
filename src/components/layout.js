/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import NavBar from "./navBar"
import "./layout2.css"
import twitterIcon from '../images/twittercopy.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <NavBar />
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
          <div style={{textAlign:'center',marginTop:'5rem',borderTop:'0.05rem solid'}}>
            <p style={{marginTop:'3rem',marginBottom:'1rem'}}><strong>The space for truth. Home of the center.</strong></p>
            <a href="https://twitter.com/thetruspace"rel="noopener noreferrer" target="_blank">
              <img src={twitterIcon} alt='twitter' style={{marginBottom:'0.8rem'}}/>
            </a>
            <footer>          
              Copyright © {new Date().getFullYear()} Thetruspace | All Rights Reserved
            </footer>
          </div>

        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
