import { Typography, Box } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function NameSection(){

    return(
        <Box sx={{
            position: {
                xs: "absolute",
                md: "relative"
            },
            width: {
                xs: "100%",
                md: "auto"
            },
            left: {
                xs: "0px",
                md: "10px"
            },
            bottom: {
                md: "0",
            },
            padding: {
                sm: "10px",
                xs: "10px"
            },
            background: {
                xs: "rgba(0,0,0,0.9)",
                md: "transparent"
            },
            backdropFilter: "-8px",
            "& .MuiTypography-root": {
                fontFamily: "Raleway"
            }
        }}>
            <Typography variant="h4" sx={{
                fontWeight: "Bold",
                color: {
                    xs: "#E4F1FF",
                    md: "#87BBD7"
                },
                fontSize: {
                    lg: "35px",
                    md: "30px",
                    sm: "20px",
                    xs: "20px"
                }
            }}>Hi, I am</Typography>
            <Box>
                <Typography variant="h2" sx={{
                    fontWeight: "Bold",
                    fontSize:{
                        lg: "55px",
                        md: "50px",
                        sm: "33px",
                        xs: "27px"
                    },
                    color: {
                        xs: "#8BD8BD",
                        md: "#262223"
                    }
                    }}>SAYAN GHANTA</Typography>
                <Typography variant="p" sx={{
                    fontWeight: "ExtraBold",
                    color: "#909090",
                    fontSize: {
                        xs: "15px",
                        md: "17px"
                    }
                }}>
                    Front-end Developer / UI Designer</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                gap: {
                        lg: "20px",
                        md: "8px",
                        xs: "10px"
                    },
                paddingTop: "10px",
                "& .MuiSvgIcon-root":{
                    backgroundColor: "#C4C4C4",
                    fontSize: {
                        lg: "35px"
                    },
                    padding: "5px",
                    borderRadius: "5px"
                }
            }}>
                <GitHubIcon sx={{color: "black"}} />
                <LinkedInIcon sx={{color: "#0077B5"}}/>
            </Box>
        </Box>
    )
}