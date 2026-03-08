import SectionHeading from "../SectionHeading";
import ContactForm from "../../Forms/ContactForm";
import { Box,Typography } from "@mui/material";
import {h3style,aboutpstyle} from "../Other"

export default function Contact(){

    return(
        <Box id="contact" sx={{
            backgroundImage: "url('contact1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: {
                xs: "50px",md: "90px"
            }
        }}>
            
            <Box sx={{
                display: "flex",
                flexDirection: {
                    md: "row",
                    xs: "column"
                },
                justifyContent: "space-between",
                gap: {
                    sm :"20px",
                    xs: "25px"
                },
                "& > .MuiBox-root": {
                    display: "flex",
                    alignItems: "start",
                    width: "100%"
            }}}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    "& .MuiTypography-root":{
                        alignSelf: "center",
                        width: {
                            xs: "97%",
                            sm: "60%",
                            md: "90%",
                            lg: "60%"
                        }
                    }
                }}>
                    <Typography sx={h3style}>Lets Get In Touch</Typography>
                    <Typography sx={aboutpstyle}>Have a project in mind or a question to ask? I'd love to hear from you. Feel free to reach out via email, phone, or the contact form below, and I'll get back to you as soon as possible.</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <ContactForm />
                </Box>
            </Box>
        </Box>
    )
}