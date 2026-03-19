import {Box,Typography} from '@mui/material'
import SectionHeading from "../OtherDesign/SectionHeading"
import AboutContent from './AboutContent'
import OtherDesign from "../OtherDesign/Otherdesign"
import OtherButton from '../OtherDesign/OtherButton'

export default function About(){

    return(
        <Box id="about" sx={{bgcolor: "#68758d",height: "auto",position: "relative",overflow:"hidden"}}>
            <SectionHeading categories="about-me"/>
            <OtherDesign imageId={1} displayValue="none" topValue="20%" leftValue="7%" hightValue="200px" />
            <Box sx={{
                height: "70%",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 30px",
                "& > .MuiBox-root":{
                    width: {
                        xs: "100%",
                        md: "50%"
                    },
                }
            }}>
                <Box sx={{display: {xs: "flex"},justifyContent: "center",alignItems: "center"}} >
                    <AboutContent/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignSelf: "center",
                    "& > .MuiTypography-root": {
                        fontFamily: "monospace",
                        fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px"
                        },
                        color: "#ABB2BF"
                    }
                }}>
            
                    <Box sx={{width: "10px",height: "10px",bgcolor:"#C778DD"}}/>
                    <Typography>Hello, i’m Sayan!</Typography>
                    <Typography>I’m a self-taught front-end developer. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</Typography>
                    <Typography>Transforming my creativity and knowledge into a websites has been my passion . I always strive to learn about the newest technologies and frameworks.</Typography>
                    <OtherButton buttonName="Read More" />
                </Box>
            </Box>
        </Box>
    )
}