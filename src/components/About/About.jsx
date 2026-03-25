import {Box,Typography} from '@mui/material'
import SectionHeading from "../OtherDesign/SectionHeading"
import AboutCard from './AboutCard'
import OtherDesign from "../OtherDesign/Otherdesign"
import OtherButton from '../OtherDesign/OtherButton'
import { h5style,sectionAlign,pageSection,hiddenItems,fillRectangle } from '../OtherDesign/Other'

export default function About(){

    return(
        <Box id="about" sx={{ ...pageSection }}>
            <SectionHeading categories="about-me"/>
            <OtherDesign imageId={1} displayValue="none" topValue="20%" leftValue="7%" hightValue="50px" />
            <Box sx={{
                ...sectionAlign,
                "& > .MuiBox-root":{
                    width: {
                        xs: "100%",
                        md: "50%"
                    },
                }
            }}>
                <Box sx={{...hiddenItems,display: {xs: "none",sm: "flex"}}} >
                    <AboutCard/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    "& > .MuiTypography-root":{
                        ...h5style
                    }
                }}>
            
                    <Box sx={{...fillRectangle}}/>
                    <Typography>Hello, i’m Sayan!</Typography>
                    <Typography>I’m a self-taught front-end developer. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</Typography>
                    <Typography>Transforming my creativity and knowledge into a websites has been my passion . I always strive to learn about the newest technologies and frameworks.</Typography>
                    <OtherButton buttonName="Read More →" itemsAlign="self-start" />
                </Box>
            </Box>
        </Box>
    )
}