import { Box,Typography } from "@mui/material"

export default function Footer(){

    return(
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                sm: "row"
            },
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#AFB3FF",
            padding: "20px",
        }}>
            <Box sx={{
                display: "flex",
                gap: 1,
                "& .MuiBox-root": {
                width: {
                    xs: "25px",
                    sm: "30px",
                    md: "35px"
                }
            }
            }}>
                <Box component="img" src="facebook.svg" />
                <Box component="img" src="telegram.svg" />
                <Box component="img" src="whatsapp.svg" />
            </Box>
            <Typography sx={{
                fontFamily: "Monteserrat",
                fontWeight: "600",
                lineHeight: "40px",
                letterSpacing: "2px",
                fontSize: {
                    xs: "10px",
                    sm: "13px",
                    md: "15px",
                    lg: "17px"
                },
                color: "#1f0067"
            }}>@2026 Sayan Ghanta All Rights Reserved.</Typography>
        </Box>
    )
}