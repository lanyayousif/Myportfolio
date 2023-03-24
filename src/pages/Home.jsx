import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Experiens from '../components/experiens/Experiens'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Project from '../components/project/Project'
import Skill from '../components/skill/Skill'

function Home() {
  return (
    <>
        <Navbar/>
        <main>
            <Header/>
            <About/> 
            <Skill/> 
            <Experiens/> 
            <Project/>
            <Contact/>        
        </main>
        <Footer/>
    </>
  )
}

export default Home