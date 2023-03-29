import React from 'react'
import './exper.css'
import Card from '../card/Card'
import Container from '../container/Container'

function Experiens() {
  const educationData=[
    {
      part:"information technology ",
      university: "sulaymanyah university",
      year:"2018-2022",
      about:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloribus,aut? A soluta sint cumque veritatis laboriosam natus`
    }
  ]
  const experiensData=[
    {
      title:"diet and fitness website ",
      location: "freelancer",
      year:"2018-2022",
      Responsibility:["Frontend (Html,Css,Javascript)","Backend (Php,Sql)"]
    }
  ]
  experiensData.map((data)=>{
   return console.log(data)
  })
  return (
    <section className='se_experiens'>
        <Container>
            <div className="row">
                <div className="education_part">
                <h1 className="title block ">Education</h1>

                  {educationData.map((data)=>{
                   return (<Card>
                      <h3>{data.part}<h3 className="uni">{data.university}</h3></h3>
                      <p className="date">{data.year}</p>
                      <p className="aboutEdu">
                        {data.about} </p>
                   </Card>)
                  }) 
                  }


                </div>
                <div className="experiens_part">
                <h1 className="title block ">Work Experience</h1>

                {experiensData.map((data)=>{
                  return(
                    <Card>
                        <h3>{data.title}<h3 className="uni"> {data.location}</h3></h3>
                        <p className="date">2018-2022</p>
                        <span className='Responsibility'>Responsibility :</span>
                        <ul>
                          <li><i class="fa-solid fa-circle"></i><p>{data.Responsibility[0]}</p></li>
                          <li><i class="fa-solid fa-circle"></i><p>{data.Responsibility[0]}</p></li>
                        </ul>
                   </Card>
                  )
                })
               }

                </div>
            </div>
        </Container>
    </section>
  )
}

export default Experiens