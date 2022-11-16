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

const educationInfoDetails = []

const skillsInfoDetails = []

const experienceInfoDetails = []

const projectInfoDetails = [];

const BasicDetailsContext = React.createContext();
const AboutDetails = React.createContext();
const EducationDetails = React.createContext();
const SkillsDetails = React.createContext();
const ExperienceDetails = React.createContext();
const ProjectDetails = React.createContext();

function CustomHookdetails() {
    const [basicdetails, setBasicdetails] = useState(basicInfoDetials);
    const [about, setAbout] = useState("");
    const [educationdetails,setEducationdetails] = useState(educationInfoDetails);
    const [skills,setSkills]  = useState(skillsInfoDetails);
    const [experience,setExperience] = useState(experienceInfoDetails);
    const [projects,setProjects] = useState(projectInfoDetails)
    return (
        <div>

            <BasicDetailsContext.Provider value={[basicdetails, setBasicdetails]}>
                <AboutDetails.Provider value={[about,setAbout]}>
                    <EducationDetails.Provider value={[educationdetails,setEducationdetails]}>
                        <SkillsDetails.Provider value={[skills,setSkills]}>
                            <ExperienceDetails.Provider value={[experience,setExperience]}>
                                <ProjectDetails.Provider value={[projects,setProjects]}>
                                   <App />
                                </ProjectDetails.Provider>
                           </ExperienceDetails.Provider>
                        </SkillsDetails.Provider>
                    </EducationDetails.Provider>
                </AboutDetails.Provider>
            </BasicDetailsContext.Provider>

        </div>
    );
}

export default CustomHookdetails
export { BasicDetailsContext ,AboutDetails, EducationDetails,SkillsDetails,ExperienceDetails,ProjectDetails}