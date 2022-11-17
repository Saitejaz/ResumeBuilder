import React, { useRef } from 'react'
import Editor from '../Editor/Editor'
import Print from "react-to-print";
import "./ViewResume.scss"
function ViewResume() {
    const download = useRef();
  return (
    <div>
        <div>
       <div ref={download}>
          <Editor />
        </div>
    </div>
     <div >
     <Print  trigger = {()=>
      <button className='download-button' style={{marginTop:"2%", marginLeft:"39%"}}>DOWNLOAD 
      <img src='https://as1.ftcdn.net/v2/jpg/01/07/57/90/1000_F_107579053_aCv8Ox7e1klnqcNuJC8cmM18aMHNdvC4.jpg'/>
      </button>
    } content = {()=>download.current}/>
  </div>
    </div>
  )
}

export default ViewResume

