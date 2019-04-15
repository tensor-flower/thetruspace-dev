import React from 'react'
import './burger.css'

const Burger =props=> (

  <button className='burger' onClick={props.click}>
      <div className='burger-line'/>
      <div className='burger-line'/>
      <div className='burger-line'/>
  </button>
)
export default Burger;