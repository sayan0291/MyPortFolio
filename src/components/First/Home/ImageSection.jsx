import { Box, Typography } from "@mui/material";

export default function ImageSection(){

    return(
        <Box component="div" sx={{
            height: "91.5vh",
            paddingTop: {
                md: "50px",
                sm : "0px"
            }
        }}>
            <Box component="img" src="myimage.png" sx={{
                width: "100%",
                height: "93%",
                objectFit: "cover",
                display: "block"
            }}/>
            <Box
                sx={{
                    display: "flex",
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