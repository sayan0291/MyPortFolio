import {Box,Typography} from '@mui/material'

export default function SectionHeading(props){

    return(
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                bgcolor: "#FFFFFF",
                padding: {
                    xs: "50px 0",
                    md: "80px 0",
                }
            }}>
                <Typography sx={{fontFamily: "Montserrat",border: "4px solid black",padding: "10px 25px",fontWeight: "bold",fontSize: {xs: "18px",sm: "20px",md:"22px",lg: "24px"}}}>{props.categories}</Typography>
            </Box>
    )
}