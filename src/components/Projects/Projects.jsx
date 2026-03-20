import { Box,Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import SectionHeading from "../OtherDesign/SectionHeading"
import OtherButton from "../OtherDesign/OtherButton"

export default function Projects() {

  return (
    <Box id="projects" sx={{ bgcolor: "#282C33"}}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SectionHeading categories="Projects" />
        <OtherButton buttonName="View All →" itemsAlign="center" />
      </Box>

      <Grid
        sx={{
          display: "grid",
          justifySelf: "center",
          gap: "30px",
          width: "45%",
          gridTemplateColumns: {
              xs: "repeat(2,1fr)"
          },
        }}
      >
        <ProjectCard projectId={1}/>
        <ProjectCard projectId={2}/>
      </Grid>

    </Box>
  );
}