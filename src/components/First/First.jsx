import Navbar from "../Navbar/Navbar"
import { Box } from '@mui/material'
import NameSection from "./Home/NameSection"
import ImageSection from "./Home/ImageSection"

export default function First(){

    return(
        <Box component="div" sx={{
            background: {
                md: "linear-gradient(105deg, #e5e5e5 50%, black 50%)",
                xs: "linear-gradient(190deg, #e5e5e5 60%, black 40%)"
            }
        }}>
            <Navbar />
            <Box sx={{
                display: "flex",
                flexDirection: {
                    md: "row",
                    xs: "column-reverse"
                },
                justifyContent: "space-between",
                alignItems: "center",
                height: "91.5vh",
                padding: {
                    lg: "0 120px 0 40px",
                    md: "0 20px"
                }
            }}>
                <NameSection />
                <ImageSection />
            </Box>
        </Box>
    )
}