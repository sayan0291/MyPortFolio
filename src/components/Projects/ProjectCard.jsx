import { Box, Typography, Button, IconButton } from "@mui/material"
import SkillName from "../Skills/UseSkill"

export default function ProjectCard({ num, name, skillNames, gitLink ,children }) {

  return (
      <Box class="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden"
        sx={{
          "& .MuiBox-root":{
            padding: "10px 0"
          }
        }}
      >
        <Box class="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
          <Typography class="absolute bottom-6 left-7 text-white text-2xl">{num}</Typography>
        </Box>
        <Box>
          <IconButton sx={{
              fontSize: {
                xs: "70px",
                sm: "75px"
              },
              "&:hover .hoverLink":{
                  bgcolor:"red"
              }
            }}>
              {children}
            </IconButton>
        </Box>
       <Box>
            <Typography class="font-bold text-xl">{name}</Typography>
        </Box> 
        <Box>
          <SkillName skillNames={skillNames} />
        </Box>
        <Button className="hoverLink" href={gitLink} target="_blank">GitLink</Button>
      </Box>

  )
}