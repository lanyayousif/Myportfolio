import React from 'react'
import Container from '../container/Container'
import './project.css'
import code from '../../assets/image/code.jpg'
import Button from '../button/Button'

function Project() {

    const projectdata=[
        {
            id:1,
            title:"makeup&skincare website",
            language:"( Html,css,react,javascript,node)",
            img:code,
            gitlink:"#",
            demoLink:"#"
        }
    ]


  return (
    <section name="project" className='se_project' id='project'>
        <h1 className="title block text_center">projects</h1>
        <Container>
            <div className="row">
                {
                    projectdata.map(data=>{
                        return  <ProjectCard {...data} key={data.id} />
                    })
                }

            </div>
        </Container>
    </section>
  )
}

export default Project


function ProjectCard({title,language,gitlink,demoLink,img}){



    
    return(
        
            <figure className="p_card">
                <div className="p_img"><img src={img} alt="" /></div>
                <figcaption>
                    <h3 className='text_center'>{title}</h3>
                    <p className="about_project text_center">
                      {language}
                    </p>
                    <div className="icon_project">

                       {/* {  
                        gitlink !== null ?<a href={gitlink}><i class="fa-brands fa-github"></i></a>:
                        demoLink !== null?<a href={demoLink}><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        :null
                        
                        } */}

                        <a href={gitlink}><i class="fa-brands fa-github"></i></a>
                        <a href={demoLink}><i class="fa-solid fa-arrow-up-right-from-square"></i></a>

                    </div>
                </figcaption>
            </figure>
        
    )
}