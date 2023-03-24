import React from 'react'
import './card.css'
export default function Card({children}) {
  return (
    <div className='card'>{children}</div>
  )
}
