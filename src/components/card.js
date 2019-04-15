import React from "react"
import { Link } from "gatsby"

const card = ({name,src,title,date,abstract}) => (
    <div className='container'>
        <div className='card'>
            <Link to={`/${name}`}>
                <img src={src} alt={name} title={name}/>
            </Link>
            <Link to={`/${name}`} style={{textDecoration:'none'}}>
                <h3 className='title-link' title={name}>{title}</h3>
            </Link>
            <p><i>{date}</i></p>
        </div>
        <p>{abstract}</p>
    </div>
)

export default card