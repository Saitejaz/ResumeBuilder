import React,{useState} from "react";
import './App.scss'
import BasicInformation from "./BasicInformation/BasicInformation";
import Education from "./Education/Education";
import { Route, Routes, useNavigate } from "react-router-dom"
import About from "./About/About";
import Certifications from "./Certifications/Certifications";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Editor from "./Editor/Editor";


function App() {

  const[fname,setFname]=useState('');
  const navigate = useNavigate();

  const navigateto = (value) => {
    navigate(`/${value}`)
  }

  return (
    <div className="main-div">
      <ul>

        <button onClick={() => navigateto("")}>
          <li>Basic-information</li>
        </button>

        <button onClick={() => navigateto("education")}>
          <li>Education</li>
        </button>

        <button onClick={() => navigateto("about")}>
          <li>About</li>
        </button>

        <button onClick={() => navigateto("experience")}>
           <li>Experience</li>
        </button>

        <button onClick={() => navigateto("certifications")}>
           <li>Certifications</li>
        </button>

        <button onClick={() => navigateto("projects")}>
           <li>Projects</li>
        </button>
      </ul>
   <div className="editor-info">
      <div className="info-display">
        <Routes>
          <Route index element={<BasicInformation fname={fname} setFname={setFname}/>}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/certifications" element={<Certifications />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>

      <div className="editor">
          <Editor fname={fname}/>
      </div>
      </div>
    </div>


  );
}

export default App;
