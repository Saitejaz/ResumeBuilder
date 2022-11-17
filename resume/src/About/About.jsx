import React, { useContext, useRef } from 'react'
import "./About.scss"
import {AboutDetails} from "../CustomHooks/CustomHookdetails"

function About() {
  const [about,setAbout]=useContext(AboutDetails);
  const abt = useRef();
  const submitHandler = (e) =>{
       setAbout(abt.current.value)
       e.preventDefault();
       abt.current.value="";

  }
  console.log(about)
  return (
    <div className='about-div'>
       <form onSubmit={submitHandler}>
        <h2>About</h2>
        <hr className='line-strike'/>
        <br/>
        <label>Write About Yourself</label>
           <textarea ref={abt}/>
           <button type="submit">Save</button>
       </form>
    </div>
  )
}

export default About
