export const sectionAlign = {
    display: "flex",
    flexDirection: {
        xs: "column",
        md: "row"
    },
    justifyContent: "space-between",
    alignItems: "center",
    gap: {
        xs: "10px",
        md: "0",
    },
    padding: "20px 30px",
}

export const pageSection = {
    bgcolor: "#282C33",
    position: "relative",
    overflow: "hidden",
}


export const imagestyle = {
        width: {xs: "40px",sm: "50px",md: "60px"}
    }

export const pstyle = {
        fontFamily: "Fira Code",
        fontSize: {
            xs: "12px",sm: "14px",md: "16px"
        },
        fontWeight: "500",
        color: "#83878b"
    }

export const h5style  = {
        fontFamily: "monospace",
        fontSize: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "18px"
        },
        color: "#ABB2BF"
}

export const tillNowArray = [
        {id:"1",imageurl: "/SkillsImages/HTML.svg", Name:"HTML5"},
        {id:"2",imageurl: "/SkillsImages/CSS.svg", Name:"CSS3"},
        {id:"3",imageurl: "/SkillsImages/JavaScript.svg", Name:"JAVASCRIPT"},
        {id:"4",imageurl: "/SkillsImages/React.svg", Name:"REACT"},
        {id:"5",imageurl: "/SkillsImages/git.svg", Name:"GIT"},
        {id:"6",imageurl: "/SkillsImages/tailwind-css.svg", Name:"TAILWIND CSS"},
        {id:"6",imageurl: "/SkillsImages/material-ui.svg", Name:"MATERIAL UI"},
    ]
export const learningSkillsArray = [
        {id:"1",imageurl: "/SkillsImages/React.svg", Name:"REACT"},
        {id:"2",imageurl: "/SkillsImages/git.svg", Name:"GIT"},
        {id:"3",imageurl: "/SkillsImages/C++Image.svg", Name:"DSA in C++"},
    ]
export const otherSkillsArray = [
        {id:"1",imageurl: "/SkillsImages/Cimage.svg", Name:"C"},
        {id:"2",imageurl: "/SkillsImages/figma.svg", Name:"FIGMA"},
]

// about section
export const aboutimagestyle = {
        width: "40px"
    }

export const h3style = {
        fontFamily: "Fira Code",
        fontSize: {
            xs: "14px",
            sm: "16px",
            md: "18px",
            lg: "20px"
        },
        color: "#b9b6d0"
    }

export const IconLinkButton = {
        fontFamily: "Open Sans",
        color: "#ABB2BF",
        fontSize: "30px",
        "&:hover":{
            boxShadow: "none",
            backgroundColor: "transparent"
        }
    }

export const aboutContent = [
    {id:1,name: "DESIGN",imageLink: "design.png",paragraph: "I focus on creating clean, modern, and user-friendly interfaces that provide a great user experience. By combining good design principles with responsive layouts, I ensure that every website looks professional and works smoothly across all devices."},
    {id:2,name: "DEVELOPMENT",imageLink: "developement.png",paragraph: "As a React Frontend Developer, I build dynamic and responsive web applications using modern technologies like React, JavaScript, HTML, and CSS. I focus on writing clean, efficient code and developing fast, scalable interfaces that deliver a smooth user experience."},
    {id:3,name: "MAINTENANCE",imageLink: "maintainance.png",paragraph: "I help keep websites running smoothly by fixing bugs, updating features, and improving performance. Regular maintenance ensures that the application stays secure, optimized, and compatible with the latest technologies and browsers."}
]

// Porjects section
import { PiCodeDuotone } from "react-icons/pi";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { GiNoodles } from "react-icons/gi";
import { BsPersonBoundingBox } from "react-icons/bs";
import maggiImage from "/Project/maggi-logo.svg"
import codeImage from "/Project/code-editor.png"
import collegeImage from "/Project/CollegeProject.svg"
import portfolioImage from "/Project/CollegeProject.svg"

export const ProjectsDetails = [
    {id:1,value:"01",ProjectName:"Maggi Page",imageLink: maggiImage,gitLink:"https://github.com/sayan0291/maggi",publicURL:"",childrenIcon: <GiNoodles color="#FFAA33 " />,skillNames: ["html","css","js"]},
    {id:2,value:"02",ProjectName:"College Project",imageLink: collegeImage,gitLink:"https://github.com/sayan0291/college_project",publicURL:"",childrenIcon: <PiBuildingApartmentFill color="#708090" />,skillNames: ["react","express.js","node.js","mongodb"]},
    {id:3,value:"03",ProjectName:"Online Code Editor",imageLink: codeImage,gitLink:"https://github.com/sayan0291/minor_project_online_code_editor",publicURL:"",childrenIcon: <PiCodeDuotone color="#191970" />,skillNames: ["html","css","js"]},
    {id:4,value:"04",ProjectName:"My Portfolio",imageLink: portfolioImage,gitLink:"https://github.com/sayan0291/MyPortFolio",publicURL:"",childrenIcon: <BsPersonBoundingBox color="#191970" />,skillNames: ["html","css","js"]}                          
]