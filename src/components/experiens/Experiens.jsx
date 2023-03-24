import React from 'react'
import './exper.css'
import Card from '../card/Card'
import Container from '../container/Container'

function Experiens() {
  return (
    <section className='se_experiens'>
        <Container>
            <div className="row">
                <div className="education_part">
                <h1 className="title block ">Education</h1>

                  <Card>
                    <h3>information technology <h3 className="uni"> sulaymanyah university</h3></h3>
                    <p className="date">2018-2022</p>
                    <p className="aboutEdu">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Doloribus,aut? A soluta sint cumque veritatis laboriosam natus </p>
                  </Card>


                </div>
                <div className="experiens_part">
                <h1 className="title block ">Work Experience</h1>

                <Card>
                    <h3>diet and fitness website <h3 className="uni"> freelancer</h3></h3>
                    <p className="date">2018-2022</p>
                    <span className='Responsibility'>Responsibility :</span>
                    <ul>
                      <li><i class="fa-solid fa-circle"></i><p>frontend (html,css,javascript)</p></li>
                      <li><i class="fa-solid fa-circle"></i><p>backend (php,sql)</p></li>
                    </ul>
                </Card>
                <Card>
                    <h3>web devlopment <h3 className="uni"> sulaymanyah </h3></h3>
                    <p className="date">2018-2022</p>
                    <span className='Responsibility'>Responsibility :</span>
                    <ul>
                      <li><i class="fa-solid fa-circle"></i><p>frontend (html,css,javascript)</p></li>
                      <li><i class="fa-solid fa-circle"></i><p>backend (php,sql)</p></li>
                    </ul>
                </Card>

                </div>
            </div>
        </Container>
    </section>
  )
}

export default Experiens