import { Box,Typography } from "@mui/material";
import SectionHeading from "../OtherDesign/SectionHeading";
import { MdEmail } from "react-icons/md";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import IconLink from "../IconLink/IconLink";
import { h5style,h3style,pstyle,sectionAlign, pageSection } from "../OtherDesign/Other";

export default function Contact(){

    return(
        <Box id="contact" sx={{
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
                        width: "auto"
                    }}
                >
                    <Typography sx={h3style}>Lets Get In Touch</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            "& .MuiBox-root":{
                                display: "flex",
                                alignItems: "center",
                            },
                            "& .MuiTypography-root":{
                                ...pstyle
                            }
                        }}
                    >
                        <Box>
                            <IconLink>
                                {<MdEmail/>}
                            </IconLink>
                            <Typography>sayanghanta57@gmail.com</Typography>
                        </Box>
                        <Box>
                            <IconLink href="https://www.linkedin.com/in/sayan-ghanta-b4376035a/">
                                {<TbBrandLinkedinFilled/>}
                            </IconLink>
                            <Typography>Sayan Ghanta</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}