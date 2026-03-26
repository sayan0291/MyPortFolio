import { Typography, Box } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconLink from "../../IconLink/IconLink"
import {designerFont} from "../../OtherDesign/Other"

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
                xs: "10px",
                md: "0"
            },
            background: {
                xs: "black",
                md: "transparent"
            },
            "& .MuiTypography-root": {
                fontFamily: "Raleway"
            }
        }}>
            <Typography variant="h4" sx={{
                fontWeight: "Bold",
                color: {
                    xs: "#E4F1FF",
                    md: "#ABABAB"
                },
                fontSize: {
                    lg: "30px",
                    md: "25px",
                    sm: "20px",
                    xs: "17px"
                }
            }}>Hi, I am</Typography>
            <Box>
                <Typography variant="h2" sx={{
                    fontWeight: "Bold",
                    fontSize:{
                        lg: "45px",
                        md: "40px",
                        sm: "33px",
                        xs: "25px"
                    },
                    color: {
                        xs: "#8BD8BD",
                        md: "#262223"
                    }
                    }}>SAYAN GHANTA</Typography>
                <Typography variant="p" sx={{
                    ...designerFont,
                    fontFamily: "monospace",
                }}>
                    Front-end Developer / UI Designer</Typography>
            </Box>
            <Box sx={{
                display: "flex"
            }}>
                <IconLink href="https://github.com/sayan0291" label="Open GitHub Profile">
                    <GitHubIcon sx={{color: "black"}} />
                </IconLink>
                <IconLink href="https://www.linkedin.com/in/sayan-ghanta-b4376035a/" label="Open Linkdin Profile" >
                    <LinkedInIcon sx={{color: "#0077B5"}}/>
                </IconLink>
            </Box>
        </Box>
    )
}