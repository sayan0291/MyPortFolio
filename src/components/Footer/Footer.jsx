import { Box,Typography } from "@mui/material"
import {sectionAlign,h3style, pstyle, flexBetween,flexAlignCenter, flexCenter} from "../OtherDesign/Other.jsx"
import { VscGithubInverted } from "react-icons/vsc";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import IconLink from "../IconLink/IconLink.jsx";

export default function Footer(){

    return(
        <Box sx={{
            ...sectionAlign,
            display: "block",
            background: "#1a2023",
            borderTop: "1px solid rgba(216, 198, 198, 0.5)",
        }}>
            <Box sx={{
                ...flexBetween
            }}>
                <Box
                    sx={{
                        ...flexAlignCenter
                    }}>
                    <Box component="img" src="/Project/Logo.svg"/>                    
                    <Typography sx={{
                        ...pstyle,
                        color: "white",
                        fontWeight: "700"
                        }}>Web designer and front-end developer</Typography>
                </Box>
                <Box sx={{
                    ...flexCenter
                }}>
                    <Typography sx={{...h3style,color: "#FFFFFF"}}>Media</Typography>
                    <Box>
                        <IconLink href="https://www.linkedin.com/in/sayan-ghanta-b4376035a/">
                            {<TbBrandLinkedinFilled/>}
                        </IconLink>
                        <IconLink>
                            <VscGithubInverted />
                        </IconLink>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography sx={{
                    ...h3style,
                    justifySelf: "center",
                }}>@2026 Sayan Ghanta All Rights Reserved.</Typography>
            </Box>
        </Box>
    )
}