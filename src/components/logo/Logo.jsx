import React from 'react'
import { NavLink } from 'react-router-dom'
import light from '../../assets/image/la-logo.png'
import dark from '../../assets/image/la-logo1.png'
import './logo.css'

export default function Logo({src}) {
  if(src==="lightLogo"){
    return (<div className='Logo_part'><NavLink to="/"><img src={dark} alt="logo" /></NavLink></div>)
  }else{
    return (<div className='Logo_part'><NavLink to="/"><img src={light} alt="logo" /></NavLink></div>)  
  }
}
