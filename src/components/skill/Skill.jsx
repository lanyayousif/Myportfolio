import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Container from '../container/Container';
import './skil.css'
function Skill() {

    const skilldata=[
        {   id:1,
            name:"Javascript",
            percintge:"70%"
        },
        {   id:2,
            name:"PHP",
            percintge:"60%"
        },
        {   id:3,
            name:"react",
            percintge:"30%"
        },
        {   id:4,
            name:"HTML,CSS",
            percintge:"80%"
        },
        {   id:6,
            name:"Bootstrap",
            percintge:"75%"
        }
    ]

    const softskilldata=[
        {   id:1,
            name:"Communication",
            percintge:70
        },
        {   id:2,
            name:"Team Work",
            percintge:60
        },
        {   id:3,
            name:"Project Management",
            percintge:40
        },
        {   id:4,
            name:"Creativity",
            percintge:60
        }
    ]


  return (
    <section name="skills" className='se_skill' id='skills'>
        <Container>
        <div className="row">
            <div className="tech_skill_part">
                <h1 className="title block text_center">Technical Skills</h1>
                {
                    skilldata.map(data=>{
                        return <Progress {...data} key={data.id}/>
                    })
                }
                
            </div>

            <div className="pro_skill_part">
            <h1 className="title block text_center">Professional Skills</h1>
                <div className="row">
                    {
                        softskilldata.map(data=>{
                            return <ProgresCircle {...data} key={data.id}/>
                        })
                    }
                </div>
            </div>
        </div>
        </Container>
    </section>
  )
}

export default Skill




function Progress({name,percintge}) {
  return (
    <div className='progress_part'>
        <div className="infor_progress">
            <div className='name_skill'>{name}</div>
            <div className='percent_skill'>{percintge}</div>
        </div>
        <div className="progressBar">
            <div className="percentage" style={{width:percintge}}></div>
        </div>
    </div>
  )
}


function ProgresCircle({name,percintge}){
return(
    <div className="Circle_bar_part">
        <div className="Circle_progressBar">
            {<CircularProgressbar value={percintge} text={`${percintge}%`} 
                styles={{
                    background: {
                    fill: 'rgba(81, 14, 96, 0.696)',
                    },
                    path: {
                        stroke: '#00FFDD',
                    },
                    trail: {
                    stroke: 'rgba(81, 14, 96, 0.696)'},
                    text: {
                    fill: '#fff',
                    fontSize: '16px',},

                }}
            />}
        </div>
        <p className="name_pro_skill">{name}</p>
    </div>
)
}