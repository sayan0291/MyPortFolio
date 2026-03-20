import { Box } from '@mui/material'
import NameSection from "./Home/NameSection"
import ImageSection from "./Home/ImageSection"

export default function First(){
    // 68758d
    return(
        <Box component="div" sx={{
            background: {
                md: "linear-gradient(105deg, #EBEFFF 50%, #282C33 50%)",
                xs: "#282C33"
            },
            position: "relative",
            overflow: "hidden",
            paddingTop: "64px"
        }}>
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