import { Box } from '@mui/material'
import NameSection from "./Home/NameSection"
import ImageSection from "./Home/ImageSection"
import { pageSection, sectionAlign } from '../OtherDesign/Other'


export default function First(){
    // 68758d
    return(
        <Box component="div" sx={{
            ...pageSection,
            background: {
                md: "linear-gradient(105deg, #EBEFFF 50%, #282C33 50%)",
                xs: "#282C33"
            },
            paddingTop: "60px"
        }}>
            <Box sx={{
                ...sectionAlign,
                flexDirection: {
                    md: "row",
                    xs: "column-reverse"
                },
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