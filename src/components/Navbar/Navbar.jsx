import {useState} from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'

export default function Navbar() {

  const [open,setOpen] = useState(false)

  return (
    <>
      <AppBar position="static" sx={{backgroundColor: "transparent",boxShadow: "none"}} >
        <Toolbar >
          <Typography variant="h6" sx={{ flexGrow: 1,color: "black" }}>
            PORTFOLIO
          </Typography>

          <Box sx={{
                  display: {
                    md: "flex",
                    xs: "none"
                  },
                  "& .MuiButton-root": {
                      fontSize: {
                          md: "13px",
                          lg: "16px"
                      },
                      color: "#FFFFFF",
                      fontFamily:"Montserrat",
                  }
              }}>
              <Button component={NavLink}>About Me</Button>
              <Button component={NavLink}>Skills</Button>
              <Button component={NavLink}>Contact Me</Button>
          </Box>
          <IconButton onClick={ () => setOpen(true)} sx={{
            display: {
              md: "none",
              sm: "block"
            },
            color: "black"
          }}>
              <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)} PaperProps={{
          sx: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(8px)",
            color: "white"
          }
        }}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3
          }}>
            <Typography variant="h6">PORTFOLIO</Typography>

            <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
        </Box>
        <Box sx={{ height: "1px", backgroundColor: "gray" }} />
        <Box sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            "& .MuiButton-root": {
              color: "white",
              fontSize: "20px"
            }
          }}>
              <Button component={NavLink} onClick={() => setOpen(false)}>
                About Me
              </Button>
              <Button component={NavLink} onClick={() => setOpen(false)}>
                Skills
              </Button>
              <Button component={NavLink} onClick={() => setOpen(false)}>
                Contact Me
              </Button>
          </Box>

      </Drawer>
    </>
  );
}