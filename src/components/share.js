import React from "react"
import {
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon
  } from 'react-share';

const share = ({url,title}) => (
    <div>
        <p>If you find our content adds value to you, please share our article on twitter (ironic, we know) and facebook.</p>
        <div style={{display:'flex'}} title='share'>
            <FacebookShareButton
                url={url}
                hashtag="#thetruspace"
                quote={title}
                style={{paddingRight:'1rem',cursor:'pointer'}}>
                <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
            <TwitterShareButton
                url={url}
                hashtags={["thetruspace"]}
                title={title}
                style={{cursor:'pointer'}}>
                <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
        </div>
    </div>
)

export default share