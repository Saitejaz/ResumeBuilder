import React, { useContext, useEffect } from 'react'
import { BasicDetailsContext, AboutDetails } from "../CustomHooks/CustomHookdetails"
import { EducationDetails } from '../CustomHooks/CustomHookdetails';
import "./Editor.scss"

function Editor() {
  const [basicdetails] = useContext(BasicDetailsContext);
  const [about] = useContext(AboutDetails)
  const [educationdetails] = useContext(EducationDetails);

  return (
    <div>
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

      <section>
        <div className='about-section'>
          <div className='about-heading'><label>About</label></div>
          <div className='editor-about-div'>
            {about}
          </div>
        </div>
      </section>

      <section>
        <div className="education-section">
          <div className='education-head'><label>Education</label></div>
          <div className="editor-edu-div">
            <table border="1">
              <th>
                  <td>Institute Name</td>
                  <td>Year of Passout</td>
                  <td>Percentage Obtained</td>
              </th>
                <tbody>
                  {
                    console.log(educationdetails)
                    // educationdetails.map((item) => {
                      // console.log("hello");
                      // // return (
                      // //   <tr>
                      // //     <td>{item.instituteName}</td>
                      // //     <td>{item.passoutyear}</td>
                      // //     <td>{item.percentage}</td>
                      // //   </tr>
                    //   // // )
                    // })
                  }

                </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Editor
