import { TextField } from "@mui/material";

export default function FormInput({label,name,register,errors,validation,rows,...rest}){
    console.log(rest)

    return(
        <TextField rows={rows} label={label} {...register(name,validation)} error={!!errors[name]} helperText={errors[name]?.message} color="secondary" size="small" {...rest} focused sx={{
            width: {
                md: "500px",
                sm: "250px"
            }
        }}/>
    )
}