import { Image } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ImageSection(){

    return(
        <Box component="div" sx={{
            height: "91.5vh",
            paddingTop: {
                md: "50px",
                sm : "0px"
            }
        }}>
            <Box component="img" src="/src/assets/myimage.png" sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
            }}/>
        </Box>
    )
}