import { Box,Typography } from "@mui/material"

export default function Footer(){

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#AFB3FF",
            padding: "50px 30px",
        }}>
            <Box sx={{
                display: "flex",
                gap: 1,
                "& .MuiBox-root": {
                width: "40px"
            }
            }}>
                <Box component="img" src="facebook.svg" />
                <Box component="img" src="telegram.svg" />
                <Box component="img" src="whatsapp.svg" />
            </Box>
            <Typography sx={{

            }}>@2026 Sayan Ghanta All Rights Reserved.</Typography>
        </Box>
    )
}