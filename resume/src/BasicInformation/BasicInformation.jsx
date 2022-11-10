import React  from 'react'
import { useRef } from 'react'
import "./BasicInformation.scss"
function BasicInformation({fname,setFname}) {
   

    const submitHandler = (e) =>{
       setFname(name.current.value);
        e.preventDefault()
    }
    console.log(fname)
    const name=useRef();
    return (
        <div>
              <h2 className='heading'>Basic Information</h2>
            <form onSubmit={submitHandler}>

            <div className='main-label-input'>
                <div className='label-input'>
                    <label>First Name </label>
                    <input ref={name} type="text" placeholder='eg : John' />
                </div>

                <div className='label-input'>
                    <label>Last Name </label>
                    <input type="text" placeholder='eg : William' />
                </div>

                
                <div className='label-input'>
                    <label>Email</label>
                    <input type="email"placeholder='eg : John@gmail.com' />
                </div>


                
                <div className='label-input'>
                    <label>Linkedin</label>
                    
                    <input type="text" placeholder='linkedin url...' />
                    
                </div>


                
                <div className='label-input'>
                    <label>Mobile Number </label>
                    <input placeholder='eg : 9876543213' />
                </div>


                
                <div className='label-input'>
                    <label>Github </label>
                    
                    <input placeholder='eg : John' />
                    
                </div>


            </div>
            <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default BasicInformation
