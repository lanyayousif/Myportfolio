import React from 'react'
import Button from '../button/Button'
import './header.css'
import tree from '../../assets/image/tree.png'
import software from '../../assets/image/software.png'
import web from '../../assets/image/webb.png'

export default function () {
  return (
    <header id='header'>
    <div className="row align-center">
        <dix className="header_box">
            <h1>Hi</h1>
            <h1>iam lanya</h1>
            <h1>web devloper</h1>
            <p>Iam web developers work on both the front-end and back-end of websites</p>
            <Button href={"#contact"}>Contact me</Button>
        </dix>
        <div className="header_img">
            <img src={web} alt="" />
        </div>
      </div> 
    </header>
  )
}
