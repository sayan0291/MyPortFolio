import { useForm } from "react-hook-form";
import { Box,Button,TextField } from "@mui/material"
import FormInput from "../components/Form/FormInput"


export default function ContactForm(){

    const {register,handleSubmit,formState : {errors}} = useForm({mode: "onChange"});
    
    const onSubmit = (data) => console.log(data)

    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Box onSubmit={handleSubmit(onSubmit)} component="form" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center",
                gap: {
                    xs: "15px",
                }
            }}>
                <FormInput 
                    label = "Enter Your Name:"
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
                <FormInput 
                    label = "Enter Your Email:"
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
                <FormInput 
                    label = "Enter Your Mobile Number:"
                    name = "mobile"
                    register = {register}
                    errors={errors}
                    validation={{
                        required: "Mobile Number is Required",
                        minLength: {
                            value: 10,
                            message: "Mobile Number Should Have 10 Numbers"
                        }
                    }}
                />
                <TextField label="Message" multiline rows={4} color="secondary" focused sx={{width: {
                    md: "500px",
                    sm: "250px"
                }}}/>
                <Button type="submit" variant="contained" sx={{
                    width:{
                        md: "100px"
                    }}}>
                    Submit
                </Button>
            </Box>
        </Box>
    )
}