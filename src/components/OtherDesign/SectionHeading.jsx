import {Box,Typography} from '@mui/material'

export default function SectionHeading(props){

    return(
            <Box sx={{
                width: "auto",
                display: "flex",
                alignItems: "center",
                bgcolor: "transparent",
                marginLeft: "10px",
                gap: "5px",
                padding: {
                    xs: "10px 0",
                    md: "20px 30px",
                },
                "& .MuiTypography-root": {
                    fontFamily: "Fira Code",
                    fontSize: {xs: "18px",sm: "20px",md:"22px",lg: "24px"}
                }
            }}> 
                <Typography sx={{color: "#C778DD"}}>#</Typography>
                <Typography sx={{color: "#FFFFFF"}}>{props.categories}</Typography>
                <Box sx={{width: "150px",height: "1.5px",bgcolor: "#C778DD"}} />
            </Box>
    )
}