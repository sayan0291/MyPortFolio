import {useState,useEffect} from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from "@mui/material";
import {Link} from "react-scroll"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import { sectionAlign } from "../OtherDesign/Other";
const sectionArray = [
  {id:1,toPath: "about",name: "About"},
  {id:3,toPath: "projects",name: "Projects"},
  {id:4,toPath: "contact",name: "Contact"}
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
              {sectionArray.map((obj,index) =>
                  (
                    <Link
                      key={obj.id}
                      to={obj.toPath}
                      smooth={true}
                      duration={500}
                      offset={-63}
                      spy={true}
                      activeClass="active"
                    >
                        <Button color="inherit">{obj.name}</Button>
                    </Link>
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
            alignItems: "center",
            gap: 2,
            "& .MuiButton-root": {
              color: "white",
              fontSize: {
                xs: "13px",
                sm: "15px"
              }
            }
          }}>
              {sectionArray.map((obj,index) => 
                (<Link 
                  key={obj.id}
                  to={obj.toPath}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  offset={-70}
                  >
                  <Button onClick={() => setOpen(false)}>{obj.name}</Button>
                </Link>)
              )}
          </Box>

      </Drawer>
    </>
  );
}