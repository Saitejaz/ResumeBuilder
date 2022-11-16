import React, { useContext, useRef } from 'react'
import "./Projects.scss"
import {ProjectDetails} from "../CustomHooks/CustomHookdetails"
function Projects() {
  const [projects,setProjects] = useContext(ProjectDetails)
  const projectname = useRef();
  const description = useRef();
  const submitHandler = (e) => {
      setProjects([...projects,{
        projectName:projectname.current.value,
        description:description.current.value,
      }])
      e.preventDefault();
      projectname.current.value="";
      description.current.value=""
  }
  console.log(projects)
  return (
    <div>
      <h2 className='projects-heading'>Projects</h2>
      <form onSubmit={submitHandler}>
        <div className='project-label-input'>
          <label>Add Project</label>
          <input ref={projectname} type="text" placeholder='eg : library Management' />
        </div>
        <div className='project-description'>
          <label>Project - description</label>

          <textarea ref={description} placeholder="Enter project description..."/>
        </div>
        <div>
          <button type="submit">Add project</button>
        </div>
      </form>
    </div>
  )
}

export default Projects


