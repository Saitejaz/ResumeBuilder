import React, { useContext, useRef } from 'react'
import {SkillsDetails} from "../CustomHooks/CustomHookdetails"
import "./Skills.scss"

function Skills() {
  const [skills,setSkills] = useContext(SkillsDetails);
  const skill = useRef();
  const submitHandler = (e) =>{
    setSkills([...skills,skill.current.value])
    e.preventDefault()
    skill.current.value = "";
  }
  return (
    <div>
      <h2 className='skills-heading'>Skills</h2>
       <form onSubmit={submitHandler}>
       <div className='skill-label-input'>
       <label>Add skill</label>
        <input ref={skill} type="text" placeholder='eg : Reactjs'/>
       </div>
       <div>
        <button type="submit">Add skill</button>
       </div>
       </form>
    </div>
  )
}

export default Skills
