import { Box, Typography, IconButton, Button } from "@mui/material"
import SkillName from "../Skills/UseSkill"
import IconLink from "../IconLink/IconLink"
import GitHubIcon from '@mui/icons-material/GitHub';
import { TbExternalLink } from "react-icons/tb";


export default function ProjectCard({ num, name, skillNames, gitLink, children }) {

  return (
    <Box
      className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden"
      sx={{
        "& .MuiBox-root": {
          padding: "5px 0"
        },
        "&:hover .drawer": {
          transform: "translateX(0)"
        }
      }}
    >

      <Box className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
        <Typography className="absolute bottom-6 left-7 text-white text-2xl">
          {num}
        </Typography>
      </Box>

      <IconButton
        sx={{
          fontSize: {
            xs: "55px",
            sm: "60px"
          }
        }}
      >
        {children}
      </IconButton>

      <Box
        sx={{
          "& .MuiTypography-root":{
            fontSize: {
            xs: "15px",
            sm: "20px"
          },
          fontFamily: "Monteserrat"
          }
        }}
      >
        <Typography>{name}</Typography>
      </Box>

      <Box >
        <SkillName skillNames={skillNames} />
      </Box>

      <Box
        className="drawer"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "101%",
          height: "35%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(-3px)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
          flexDirection: "row",
          transform: "translateX(100%)",
          transition: "transform .6s cubic-bezier(.65,.05,.36,1)"
        }}
      >
        <IconLink href={gitLink} label="Open GitHub Project Link">
            <GitHubIcon sx={{color: "white"}} />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/sayan-ghanta-b4376035a/" label="Open Linkdin Profile" >
            <TbExternalLink color="white" />
        </IconLink>
      </Box>

    </Box>
  )
}