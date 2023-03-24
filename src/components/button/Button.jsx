import React from 'react'
import { NavLink } from 'react-router-dom'
import './button.css'
export default function Button({children}) {
  return (
    <button className='main-button'><NavLink to="/">{children}</NavLink></button>
  )
}
