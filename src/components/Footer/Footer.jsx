import { Box,Typography } from "@mui/material"
import {sectionAlign} from "../OtherDesign/Other.jsx"

export default function Footer(){

    return(
        <Box sx={{
            ...sectionAlign,
            background: "#14161a"
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
            <Box>
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
        </Box>
    )
}