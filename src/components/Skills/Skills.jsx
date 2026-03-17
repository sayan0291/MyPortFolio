import { Box } from "@mui/material";
import SectionHeading from "../SectionHeading";
import SkillsSection from "./SkillsSection";
import { tillNowArray,learningSkillsArray,otherSkillsArray } from "../Other";



export default function Skills(){    

    return(
        <Box id="skills" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#EBEFFF",
            "& > .MuiBox-root": {width: "45%"}
            }}>
            <SectionHeading categories="SKILLS" />
            <SkillsSection title="USING SKILLS:" Skills={tillNowArray}/>
            <SkillsSection title="LEARNING:" Skills={learningSkillsArray}/>
            <SkillsSection title="OTHERS:" Skills={otherSkillsArray}/>
        </Box>
    )
}