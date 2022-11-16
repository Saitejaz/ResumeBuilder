import React, { useContext, useEffect, useRef } from 'react'
import { BasicDetailsContext, AboutDetails, ProjectDetails } from "../CustomHooks/CustomHookdetails"
import { EducationDetails } from '../CustomHooks/CustomHookdetails';
import { SkillsDetails } from "../CustomHooks/CustomHookdetails"
import { ExperienceDetails } from "../CustomHooks/CustomHookdetails"
// import Print from "react-to-print";

import "./Editor.scss"

function Editor() {
  const [basicdetails] = useContext(BasicDetailsContext);
  const [about] = useContext(AboutDetails)
  const [educationdetails] = useContext(EducationDetails);
  const [skills] = useContext(SkillsDetails)
  const [experience] = useContext(ExperienceDetails);
  const [projects] = useContext(ProjectDetails);

  // const download = useRef();

  return (
    <div>
    <div >
      <section >
        <div className='basic-information-section-name-div'>
          <div>
            <h1 className='test'>{basicdetails.fname} &nbsp;{basicdetails.lname}</h1>
          </div>
          <div className='basic-information-section-name-subdiv'>

            {basicdetails.email} &nbsp;&nbsp;
            || &nbsp;&nbsp; (+91){basicdetails.phoneNumber} &nbsp;&nbsp;
            || &nbsp;&nbsp; {basicdetails.linkedin} &nbsp;&nbsp;|| &nbsp;&nbsp;
            {basicdetails.github}
          </div>
        </div>
      </section>
     <br/>
      <section>
        <div className='about-section'>
          <div className='about-heading'><label>About</label></div>
          <div className='editor-about-div'>
            {about}
          </div>
        </div>
      </section>

      <br/>

      <section>
        <div className="education-section">
          <div className='education-head'><label>Education</label></div>
          <div className="editor-edu-div">
            <table border="1" align='center' width="80%">

              <tr>
                <td>Institute Name</td>
                <td>Year of Passout</td>
                <td>Percentage Obtained</td>
              </tr>

              <tbody>
                {
                  educationdetails.map((item) => {
                    return (
                      <tr>
                        <td>{item.instituteName}</td>
                        <td>{item.passoutyear}</td>
                        <td>{item.percentage}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

 <br/>

      <section>
        <div className='skills-section'>
          <div className='skills-head'><label>Skills</label></div>

          <div className='editor-skills-div'>

            <ul>
              {
                skills.map((item) => {
                  return <li>{item}</li>
                })
              }
            </ul>

          </div>
        </div>
      </section>
 <br/>
      <section>
        <div className="experience-section">
          <div className="experience-head"><label>Experience</label></div>
          <div className='editor-experience-div'>
            {
              experience.map((item) => {
                return (
                  <div>
                    <h4>{item.companyName}</h4>
                    {/* <span>{item.from}</span>
                  <span>{item.to}</span> */}
                    <span>{item.role}</span>
                  </div>
                );
              })
            }
          </div>
        </div>
        {console.log(experience)}
      </section>
      <br/>

      <section>
        <div className="projects-section">
          <div className="projects-head"><label>Projects</label></div>
          <div className='editor-projects-div'>
            {
              projects.map((item) => {
                return (
                  <div>
                    <h4>{item.projectName}</h4>
                    <p>{item.description}</p>
                  </div>
                )
              })

            }
          </div>
        </div>
      </section>


     
    </div>
    {/* <div>
       <Print trigger = {()=>
        <button onClick={()=>{

        }}>DOWNLOAD </button>
      } content = {()=>download.current}/>
    </div> */}
    </div>
    
  )
}

export default Editor


