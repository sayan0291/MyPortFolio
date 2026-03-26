import { Box,Typography } from "@mui/material";
import SectionHeading from "../OtherDesign/SectionHeading";
import { MdEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import IconLink from "../IconLink/IconLink";
import { h5style,h3style,pstyle,sectionAlign, pageSection, flexAlignCenter, flexCenter } from "../OtherDesign/Other";

export default function Contact(){

    return(
        <Box sx={{
            ...pageSection
        }}> 
            <SectionHeading categories="contact-me" />
            <Box sx={{ ...sectionAlign }}>
                <Box 
                    sx={{
                        width: {
                            xs: "90%",
                            sm: "70%",
                            md: "40%"
                        },
                    }}>
                    <Typography sx={{...h5style,}}>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</Typography>
                </Box>
                <Box
                    sx={{
                        padding: "16px",
                        border: "1px solid rgba(0,0,0,0.4)",
                        borderRadius: "4px",
                        boxShadow: "0 0 15px 1px rgba(0,0,0,0.2)"
                    }}
                >
                    <Typography sx={h3style}>Lets Get In Touch</Typography>
                    <Box
                        sx={{
                            "& .MuiBox-root":{
                                ...flexAlignCenter
                            },
                            "& .MuiTypography-root":{
                                ...pstyle
                            }
                        }}
                    >
                        <Box>
                            <IconLink>
                                <BsDiscord />
                            </IconLink>
                            <Typography>!sayan</Typography>
                        </Box>
                        <Box>
                            <IconLink>
                                {<MdEmail/>}
                            </IconLink>
                            <Typography>sayanghanta57@gmail.com</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}