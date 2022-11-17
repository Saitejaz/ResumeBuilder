import React, { useContext, useRef } from 'react'
import "./Education.scss"
import {EducationDetails} from "../CustomHooks/CustomHookdetails"

function Education() {
  const [educationdetails, setEducationdetails] = useContext(EducationDetails);
  const instituteName = useRef();
  const passoutyear = useRef();
  const percentage = useRef();
  console.log(educationdetails)
  const submitHandler = (e) =>{
     setEducationdetails([...educationdetails,{
      instituteName:instituteName.current.value,
      passoutyear:passoutyear.current.value,
      percentage:percentage.current.value,
  }])
    e.preventDefault();
    instituteName.current.value="";
    passoutyear.current.value="";
    percentage.current.value="";
  }
  return (
    <div className='education'>
      <h2 className='education-heading'>Education</h2>
      <hr/>
      <form onSubmit={submitHandler}>
        <div className='edu-label-input-div'>
          <div className='edu-label-input'>
            <label>Name Of The Institute</label>
            <input ref={instituteName} type="text" placeholder='eg : IIT'></input>
          </div>
          <div className='edu-label-input'>
            <label>Year Of Passout</label>
            <input ref={passoutyear} type="text" placeholder='eg :2020'></input>
          </div>
          <div className='edu-label-input'>
            <label>Percentage Obtained</label>
            <input ref={percentage} type="text" placeholder='eg : 91'></input>
          </div>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Education
