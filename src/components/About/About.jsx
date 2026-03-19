import {Box,Typography} from '@mui/material'
import SectionHeading from "../OtherDesign/SectionHeading"
import AboutContent from './AboutContent'

export default function About(){

    return(
        <Box id="about" sx={{bgcolor: "#68758d"}}>
            <SectionHeading categories="ABOUT ME"/>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: {
                    xs: "15px",
                    sm: "17px",
                    md: "20px"
                },
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: {
                        md: "row",
                        xs: "column"
                    },
                    alignItems: "center",
                    gap: {
                        xs: "15px",
                        sm: "17px",
                        md: "20px"
                    }
                }}>
                    <AboutContent aboutid={1}/>
                    <AboutContent aboutid={2}/>
                </Box>
                <AboutContent aboutid={3}/>
            </Box>
            <Box sx={{width: "100%",display: "flex",justifyContent: "center",padding: "50px 0 0 0"}}>
            </Box>
        </Box>
    )
}