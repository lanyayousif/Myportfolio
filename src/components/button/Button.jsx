import React from 'react'
import { NavLink } from 'react-router-dom'
import './button.css'
export default function Button({children,href,target,download,rel}) {
  return (
    <a href={href} download={download} target={target} rel={rel}> <button className='main-button'>{children}</button></a>
  )
}
