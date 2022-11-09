import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CandidateInformation from '../CandidateInformation/CandidateInformation';
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();
const navigateToCandidateInformation = () =>{
    navigate('/candidateInformation')
}

  return (
    <div className='header-div'>
        <ul>
            <button onClick={navigateToCandidateInformation}><li>Candidate-Information</li></button>
            <li>Work-Experience</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Certifications </li>
        </ul>
 
        <Routes>
            <Route path='/candidateInformation' element={<CandidateInformation/>}/>
        </Routes>

    </div>
  )
}

export default Navbar
