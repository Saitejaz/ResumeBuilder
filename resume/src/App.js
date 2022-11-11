import React, { useContext, useState } from "react";
import "./App.scss";
import BasicInformation from "./BasicInformation/BasicInformation";
import Education from "./Education/Education";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Editor from "./Editor/Editor";


function App() {

 
  // const [basicdetails, setBasicdetails] = useState(basicInfoDetials);
  const navigate = useNavigate();

  const navigateto = (value) => {
    navigate(`/${value}`);
  };

  return (
    <div className="main-div">
      <ul>
        <button onClick={() => navigateto("")}>
          <li>Basic-information</li>
        </button>

        <button onClick={() => navigateto("about")}>
          <li>About</li>
        </button>

        <button onClick={() => navigateto("education")}>
          <li>Education</li>
        </button>

        <button onClick={() => navigateto("skills")}>
          <li>Skills</li>
        </button>


        <button onClick={() => navigateto("experience")}>
          <li>Experience</li>
        </button>

    
        <button onClick={() => navigateto("projects")}>
          <li>Projects</li>
        </button>

        <button>
          <li>Download Resume</li>
        </button>
      </ul>
      <div className="editor-info">
        <div className="info-display">
          <Routes>
            <Route
              index
              element={
                <BasicInformation
                />
              }
            ></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>

        <div className="editor">
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App;
