import React, { useState } from 'react'
import App from '../App';

const basicInfoDetials = {
    fname: "",
    lname: "",
    phoneNumber: "",
    linkedin: "",
    github: "",
    email: "",
};

const educationInfoDetails = {
    instituteName:"",
    passoutyear:"",
    percentage:"",
}

const BasicDetailsContext = React.createContext();
const AboutDetails = React.createContext();
const EducationDetails = React.createContext();

function CustomHookdetails() {
    const [basicdetails, setBasicdetails] = useState(basicInfoDetials);
    const [about, setAbout] = useState("");
    const [educationdetails,setEducationdetails] = useState(educationInfoDetails);
    return (
        <div>

            <BasicDetailsContext.Provider value={[basicdetails, setBasicdetails]}>
                <AboutDetails.Provider value={[about,setAbout]}>
                    <EducationDetails.Provider value={[educationdetails,setEducationdetails]}>
                          <App />
                    </EducationDetails.Provider>
                </AboutDetails.Provider>
            </BasicDetailsContext.Provider>

        </div>
    );
}

export default CustomHookdetails
export { BasicDetailsContext ,AboutDetails, EducationDetails}