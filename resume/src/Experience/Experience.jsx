import React, { useContext, useRef } from 'react'
import {ExperienceDetails} from "../CustomHooks/CustomHookdetails" 
import './Experience.scss'

function Experience() {
  const [experience,setExperience] = useContext(ExperienceDetails);
  const submitHandler = (e) =>{
      setExperience([...experience,{
        companyName:companyname.current.value,
        role:role.current.value,
        //from : from.current.value,
        //to:to.current.value,
   } ])
      e.preventDefault()
      companyname.current.value = "";
      role.current.value= "";
  }
  const companyname = useRef();
  const role = useRef();
 // const from  = useRef();
 // const to = useRef();
  return (
    <div>
       <h2 className='experience-heading'>Experience</h2>
       <form onSubmit={submitHandler}>
         <div className='experience-label-input-div'>
            <div className='experience-label-input'>
              <label>Company Name</label>
        
              <input ref={companyname} type="text" placeholder=' eg : Microsoft'/>
              {/* <label>From</label>
              <input type="date" />
              <label>To</label>
              <input type="date" /> */}
            </div>
            <div className='experience-label-input'>
              <label>Role</label>
              <input ref={role} type="text" placeholder=' eg : Backend Developer'/>
            </div>
         </div>
         <button type='submit'>Add</button>
       </form>
       {
        console.log(experience)
       }
    </div>
  )
}

export default Experience


