import React  from 'react'
import { useRef } from 'react'
import "./BasicInformation.scss"
function BasicInformation({setBasicdetails,...basicdetails}) {
   

    const firstname = useRef();
    const lname = useRef();
    const email = useRef();
    const phonenumber = useRef();
    const linkedin = useRef();
    const github = useRef();
    console.log(basicdetails)
 
    const submitHandler = (e) =>{
        setBasicdetails({...basicdetails,fname:firstname.current.value});
        // e.preventDefault();
        alert(basicdetails.fname)
        console.log(basicdetails.fname)
    }
    

    return (
        <div>
              <h2 className='heading'>Basic Information</h2>
            <form onSubmit={submitHandler}>

            <div className='main-label-input'>
                <div className='label-input'>
                    <label>First Name </label>
                    <input ref={firstname} type="text" placeholder='eg : John' />
                </div>

                <div className='label-input'>
                    <label>Last Name </label>
                    <input ref={lname} type="text" placeholder='eg : William' />
                </div>

                
                <div className='label-input'>
                    <label>Email</label>
                    <input ref={email} type="email"placeholder='eg : John@gmail.com' />
                </div>


                
                <div className='label-input'>
                    <label>Linkedin</label>
                    
                    <input ref={linkedin} type="text" placeholder='linkedin url...' />
                    
                </div>


                
                <div className='label-input'>
                    <label>Mobile Number </label>
                    <input ref={phonenumber} placeholder='eg : 9876543213' />
                </div>


                
                <div className='label-input'>
                    <label>Github </label>
                    
                    <input ref={github} placeholder='eg : John' />
                    
                </div>


            </div>
            <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default BasicInformation
