import {useState,useEffect} from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import { sectionAlign,NavButton, imagestyle, flexCenter } from "../OtherDesign/Other";
const sectionArray = [
  {id:1,toPath: "/home",name: "Home"},
  {id:2,toPath: "/about",name: "About"},
  {id:3,toPath: "/projects",name: "Projects"}
]

export default function Navbar() {

  const [open,setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 400);
  };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{
                    background: scrolled ? "#292929" : "transparent",
                    boxShadow: "none",
                    transform: scrolled ? "translateY(0px)" : "translateY(0px)",
                    transition: "transform 0.4s ease,background-color 0.4s ease",
                    willChange: "transform",
                    }} >
        <Toolbar sx={{display: "flex",justifyContent: "space-between"}}>
          <Box>
            <Box component="img" src="Project/Logo_Black.svg" sx={{...imagestyle,flexGrow: 1}} />
          </Box>

          <Box sx={{
                  display: {
                    md: "flex",
                    xs: "none"
                  }
              }}>
              {sectionArray.map((obj,index) =>
                  (
                    <NavLink
                      key={obj.id}
                      to={obj.toPath}
                      duration={500}
                      offset={-63}
                    >
                        <Button sx={{...NavButton}} color="inherit">{obj.name}</Button>
                    </NavLink>
                  )
              )}
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
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)} PaperProps={{
          sx: {
            width: "40vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(8px)",
            color: "white"
          }
        }}>
          <Box sx={{
            ...sectionAlign,
            flexDirection: "row"
          }}>
            <Box component="img" src="Project/Logo.svg" />

            <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
        </Box>
        <Box sx={{ height: "1px", backgroundColor: "gray" }} />
        <Box sx={{
            flex: 1,
            ...flexCenter,
            gap: 2
          }}>
              {sectionArray.map((obj,index) => 
                (<NavLink 
                  key={obj.id}
                  to={obj.toPath}
                  duration={500}
                  offset={-70}
                  >
                  <Button sx={{...NavButton}} onClick={() => setOpen(false)}>{obj.name}</Button>
                </NavLink>)
              )}
          </Box>

      </Drawer>
    </>
  );
}