import SectionHeading from "../SectionHeading";
import ContactForm from "../../Forms/ContactForm";
import { Box,Typography } from "@mui/material";
import {h3style} from "../Other"

export default function Contact(){

    return(
        <Box sx={{
            height: "100vh",
            backgroundImage: "url('contact1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: {
                sm: "50px",md: "70px"
            }
        }}>
            {/* <SectionHeading categories="CONTACT ME" /> */}
            
            <Box sx={{
                display: "flex",
                flexDirection: {
                    md: "row",
                    xs: "column"
                },
                justifyContent: "space-between",
                "& > .MuiBox-root": {
                    display: "flex",
                    justifyContent: "center",
                    width: "100%"
            }}}>
                <Box>
                    <Typography sx={h3style}>Lets Get In Touch</Typography>
                </Box>
                <Box>
                    <ContactForm />
                </Box>
            </Box>
        </Box>
    )
}