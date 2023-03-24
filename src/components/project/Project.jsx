import React from 'react'
import Container from '../container/Container'
import './project.css'
import code from '../../assets/image/code.jpg'
import Button from '../button/Button'

function Project() {
  return (
    <section className='se_project'>
        <h1 className="title block text_center">projects</h1>
        <Container>
            <div className="row">

                <ProjectCard name=""/>

            </div>
        </Container>
    </section>
  )
}

export default Project


function ProjectCard({}){
    return(
        
            <figure className="p_card">
                <div className="p_img"><img src={code} alt="" /></div>
                <figcaption>
                    <h3 className='text_center'>makeup&skincare website</h3>
                    <p className="about_project text_center">
                       ( Html,css,react,javascript,node)
                    </p>
                    <div className="icon_project">
                        <a href="#"><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </figcaption>
            </figure>
        
    )
}