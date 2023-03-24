import React, { useEffect, useState } from 'react'
import  Container  from '../container/Container'
import Logo from '../logo/Logo'
import menudark from '../../assets/image/menu.png'
import menulight from '../../assets/image/menu (1).png'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Button from '../button/Button'

function Navbar() {
    const [shownav,setShownav]=useState(false)
    const [scrollnav,setScrollnav]=useState(false)
    const [scrollDir,setScrollDir]=useState(0)
    const [srcimg,setSrcimg]=useState("lightLogo")
    const [menuimg,setMenuimg]=useState("lightmenu")


    const handlShowNavbar=()=>{
        setShownav(!shownav)
    }
    
 
    const changeBackground = (event) => {
        if(window.scrollY>30){
        setScrollnav(true)
        setSrcimg("darkLogo")
        setMenuimg("lightmenu")
       }
     else{setScrollnav(false)
        setSrcimg("lightLogo")
        setMenuimg("darkmenu")
        }

    }
    useEffect(()=>{
        // setScrollDir(window.scrollY)
        changeBackground()
        window.addEventListener("scroll", changeBackground)
        
    })

  return (
    <nav className={scrollnav && `scrolled`}>
        <Container>

            <div className="nav-parts">

                    <div className="logo-part">
                        <Logo src={srcimg}/>
                    </div>

                    <div className="humberger_btn" onClick={handlShowNavbar}>
                      { <Menu src={menuimg}/> } 
                    </div>
                    <div className={`nav_elements ${shownav && 'active'} `}>
                        <ul>
                            <li><NavLink  to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/skills">Skills</NavLink></li>
                            {/* <li><NavLink to="/experience">Experience</NavLink></li> */}
                            <li><NavLink to="/project">Project</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <Button>download cv</Button>
                        </ul>
                    </div>



            </div>

        </Container>
    </nav>
  )
}

export default Navbar



 function Menu({src}) {
    
    console.log("menuimg  "+src)

        if(src==="lightmenu"){ 
        return(<img src={menudark} alt="menu button"/> ) }
        else{
        return (<img src={menulight} alt="menu button" />)} 
}
