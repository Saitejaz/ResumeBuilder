import React, { useContext }  from 'react'
import { useRef } from 'react'
import "./BasicInformation.scss"
import {BasicDetailsContext} from "../CustomHooks/CustomHookdetails"
function BasicInformation() {
   
    const [basicInfoDetails,setBasicInfoDetails] = useContext(BasicDetailsContext);

    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const phonenumber = useRef();
    const linkedin = useRef();
    const github = useRef();
    console.log(basicInfoDetails)
 
    const submitHandler = (e) =>{
        setBasicInfoDetails({...basicInfoDetails,
            fname:firstname.current.value,
            lname:lastname.current.value,
            email:email.current.value,
            phoneNumber:phonenumber.current.value,
            linkedin:linkedin.current.value,
            github:github.current.value   
        });

            e.preventDefault();
        // alert(basicdetails.fname)
        // console.log(basicdetails.fname)
    }
    

    return (
        <div className='basicinfo-container'>
              <h2 className='heading'>Basic Information</h2>
            <form onSubmit={submitHandler}>

            <div className='main-label-input'>
                <div className='label-input'>
                    <label>First Name </label>
                    <input ref={firstname} type="text" placeholder='eg : John'/>
                </div>

                <div className='label-input'>
                    <label>Last Name </label>
                    <input ref={lastname} type="text" placeholder='eg : William' />
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
