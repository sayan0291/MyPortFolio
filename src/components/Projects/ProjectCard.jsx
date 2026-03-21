import { Box, Typography, IconButton, Button } from "@mui/material"
import SkillName from "../Skills/UseSkill"
import IconLink from "../IconLink/IconLink"
import GitHubIcon from '@mui/icons-material/GitHub';
import { TbExternalLink } from "react-icons/tb";
import { ProjectsDetails } from "../OtherDesign/Other";


export default function ProjectCard({projectId}) {

  const item = ProjectsDetails.find(obj => obj.id === projectId)

  return (
    <Box
      className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 pb-5 space-y-3 relative overflow-hidden"
    >
      <Box component="img" src={item.imageLink} />

      <Box className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
        <Typography className="absolute bottom-6 left-7 text-white text-2xl">
          {item.value}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiTypography-root":{
            fontSize: {
            xs: "15px",
            sm: "18px",
            md: "19px"
          },
          fontFamily: "Monteserrat",
          color: "#000047"
          }
        }}
      >
        {/* <IconButton
        sx={{
          fontSize: {
            xs: "45px",
            sm: "50px",
            "&:hover": {
              boxShadow: "none",
              backgroundColor: "transparent"
            }
          }
        }}
      >
        {item.childrenIcon}
      </IconButton> */}
        <Typography >{item.ProjectName}</Typography>
      </Box>

      <Box>
        <SkillName skillNames={item.skillNames} />
      </Box>

    </Box>
  )
}