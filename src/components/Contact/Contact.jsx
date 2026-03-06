import SectionHeading from "../SectionHeading";
import ContactForm from "../../Forms/ContactForm";
import { Box } from "@mui/material";
import { useForm } from 'react-hook-form'

export default function Contact(){

    return(
        <Box sx={{
            backgroundImage: "url('contact.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <SectionHeading categories="CONTACT ME" />
            
            <ContactForm />
        </Box>
    )
}