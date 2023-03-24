import React from 'react'
import './about.css'
import about_img from '../../assets/image/about.png'
import Button from '../button/Button'
import Container from '../container/Container'
import Card from '../card/Card'
import user_interface from '../../assets/image/user-interface.png'
import web from '../../assets/image/web.png'
import data_management from '../../assets/image/data-management.png'

function About() {



  return (
    <section className='se_about'>
    <Container>
        <div className="row">
            <div className="img-part">
                <img src={about_img} alt="" />
            </div>
            <div className="box-about">
               <h1 className="title">About me</h1>
                <p>I am lanya yousif, web developer from sulaymanih, kurdstan.
                I have rich experience in web site design and building and customization</p>
                <p>specialize in the creation and maintenance of websites and web applications. 
                i am full stack Web developer work on both the front-end and back-end of websites</p>

                <Button>download cv</Button>
            </div>
        </div>

                
            <div className='whatdo-part'>
               <h1 className="title block text_center">What I do</h1>

                 <div className='cards'>
                       <Card>
                            <img src={user_interface} alt="user_interface image" />
                            <h3>UI Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer 
                              adipiscing elit, sed diam nonummy nibh euismod
                             tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                       </Card>
                       <Card>
                            <img src={web} alt="user_interface image" />
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer 
                              adipiscing elit, sed diam nonummy nibh euismod
                             tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                       </Card>
                       <Card>
                            <img src={data_management} alt="user_interface image" />
                            <h3>Database Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer 
                              adipiscing elit, sed diam nonummy nibh euismod
                             tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                       </Card>
                 </div>

            </div>


    </Container>

    </section>
  )
}

export default About