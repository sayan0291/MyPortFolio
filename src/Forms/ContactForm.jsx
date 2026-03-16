import { useForm } from "react-hook-form";
import { Box,Button,FormControl,FormLabel } from "@mui/material"
import FormInput from "../components/Form/FormInput"


export default function ContactForm(){

    const {register,handleSubmit,formState : {errors}} = useForm({mode: "onChange"});
    
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Box onSubmit={handleSubmit(onSubmit)} component="form" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center",
                gap: "10px",
                "& .MuiFormControl-root": {
                    gap: 1,
                    "& .MuiFormLabel-root": {
                        fontFamily: "Montserrat",
                        fontSize: {
                            xs: "10px",sm: "13px",md: "15px"
                        }
                    },
                    "& .MuiFormInput-root": {
                        fontFamily: "Montserrat",
                        fontSize: {
                            xs: "10px",sm: "13px",md: "15px"
                        }
                    }
                },
                boxShadow: "0 0 10px 0 rgba(45, 45, 45, 0.4)",
                padding: "30px",
                bgcolor: "#EBEFFF",
                borderRadius: "5px"
            }}>
                <FormControl>
                    <FormLabel htmlFor="full-name">Full Name:</FormLabel>
                    <FormInput
                        id = "full-name"
                        name = "name"
                        register = {register}
                        errors={errors}
                        validation={{
                            required: "Name is Required",
                            minLength: {
                                value: 5,
                                message: "Minimum 5 Characters"
                            }
                        }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="email-address">Email:</FormLabel>
                    <FormInput 
                        id = "email-address"
                        name = "email"
                        register = {register}
                        errors={errors}
                        validation={{
                            required: "Email is Required",
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                message: "Email is not Valid"
                            }
                        }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="mobile-number">Mobile Number:</FormLabel>
                    <FormInput 
                        id = "mobile-number"
                        name = "mobile"
                        register = {register}
                        errors={errors}
                        validation={{
                            required: "Mobile Number is Required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Mobile Number Should Have 10 Numbers"
                            }
                        }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="send-message">Write Your Message Here:</FormLabel>
                    <FormInput 
                        id = "send-message"
                        name = "message"
                        register = {register}
                        errors={errors}
                        multiline
                        rows={7}
                    />
                </FormControl>
                
                <Button type="submit" variant="contained" sx={{
                    alignSelf: "flex-end",
                    bgcolor: "#656ED3",
                    color: "#AFB3FF",
                    borderRadius: "12px",
                    padding: "5px 25px"
                    }}>
                    Submit
                </Button>
            </Box>
        </Box>
    )
}