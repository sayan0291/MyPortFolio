import { TextField } from "@mui/material";

export default function FormInput({id,name,register,errors,validation,multiline = false,rows = 1,...rest}){


    return(
        <TextField 
        id = {id}
        multiline={multiline}
        rows={rows} 
        {...register(name,validation)} 
        error={!!errors[name]} 
        helperText={errors[name]?.message} 
        color="secondary" 
        size="small" 
        {...rest} 
        sx={{
            fontFamily: "monospace",
            width: {
                lg: "450px",
                md: "400px",
                sm: "350px",
                xs: "300px"
            },
            "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                "& fieldset": {
                    borderWidth: "2px",
                borderColor: "#AFB3FF"
                },
                "&:hover fieldset": {
                borderColor: "#656ED3"
                },
                "&.Mui-focused fieldset": {
                borderColor: "green"
            }}
        }}
        InputProps={{
            sx: {
                fontFamily: "monospace",
                fontSize: "14px",
                color: "gray"
            }
        }}/>
    )
}