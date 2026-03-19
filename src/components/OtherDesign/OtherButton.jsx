import {Box,Typography} from "@mui/material"

export default function OtherButton({buttonName,href}){
    return(
        <Box 
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                cursor: "pointer",
                alignSelf: "self-start",
                padding: "3px 15px",
                border: "1px solid #BECBD6",
                borderRadius: "2px"
            }}
        >
            <Typography 
                sx={{
                    color: "#c0ffed",
                    fontFamily: "Fira Code"
                }}
            >{buttonName}</Typography>
        </Box>
    )
}