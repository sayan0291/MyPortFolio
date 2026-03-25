import { Box, Typography } from "@mui/material";
import OtherDesign from "../../OtherDesign/Otherdesign";
import { fillRectangle,h5style,hiddenItems,pstyle } from "../../OtherDesign/Other"

export default function ImageSection(){

    return(
        <Box component="div" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "91.5vh",
            paddingTop: {
                xs: "0",
                md: "50px"
            },
            gap: "5px"
        }}>
            <OtherDesign imageId={1} displayValue="none" topValue="20%" leftValue="55%" hightValue="120px" />
            <OtherDesign imageId={1} displayValue="block" topValue="90%" leftValue="95%" hightValue="100px" />
            <OtherDesign imageId={2} displayValue="none" topValue="20.2%" leftValue="55.2%" hightValue="117px" />
            <OtherDesign imageId={2} displayValue="block" topValue="29%" leftValue="5%" hightValue="70px" />
            <OtherDesign imageId={2} displayValue="none" topValue="79%" leftValue="35%" hightValue="90px" />
            <Box component="img" src="myimage.png" sx={{
                width: {
                    xs: "80%",
                    md: "100%",
                },
                height: {
                    xs: "80%",
                    md: "91%"
                },
                objectFit: "cover",
                display: "block"
            }}/>
            <Box
                sx={{
                    ...hiddenItems,
                    display: {
                        sm: "none",
                        md: "flex"
                    },
                    padding: "3px 10px",
                    gap:"10px",
                    border: "1px solid #BECBD6",
                    "& .MuiTypography-root":{
                        fontFamily: "Fira Code",
                    }
                }}
            >   <Box sx={{...fillRectangle,bgcolor: "#0000FF",borderRadius: "50%"}}/>
                <Typography
                    sx={{
                        ...pstyle,
                        color: "#d1d6df"
                    }}
                >Currently Working On</Typography>
                <Typography
                    sx={{
                        ...h5style
                    }}
                >PORTFOLIO</Typography>
            </Box>
        </Box>
    )
}