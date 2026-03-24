import { Box, Typography } from "@mui/material";
import OtherDesign from "../../OtherDesign/Otherdesign";

export default function ImageSection(){

    return(
        <Box component="div" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "91.5vh",
            paddingTop: {
                md: "50px",
                sm : "0px"
            }
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
                    md: "93%"
                },
                objectFit: "cover",
                display: "block"
            }}/>
            <Box
                sx={{
                    display: {
                        xs: "none",
                        md: "flex"
                    },
                    padding: "3px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap:"10px",
                    border: "1px solid #ABB2BF",
                    "& .MuiTypography-root":{
                        fontFamily: "Fira Code",
                    }
                }}
            >   <Box sx={{width: "10px",height: "10px",bgcolor:"#C778DD"}}/>
                <Typography
                    sx={{
                        fontSize: "15px",
                        color: "#d1d6df"
                    }}
                >Currently Working On</Typography>
                <Typography
                    sx={{
                        fontSize: "17px",
                        color: "#FFFFFF"
                    }}
                >PORTFOLIO</Typography>
            </Box>
        </Box>
    )
}