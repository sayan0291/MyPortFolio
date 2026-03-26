import { Box,Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import SectionHeading from "../OtherDesign/SectionHeading"
import OtherButton from "../OtherDesign/OtherButton"
import OtherDesign from "../OtherDesign/Otherdesign"
import { flexBetween, pageSection } from "../OtherDesign/Other";

export default function Projects() {

  return (
    <Box sx={{ ...pageSection }}>
      <OtherDesign imageId={2} displayValue="none" topValue="71%" leftValue="-48px" hightValue="150px" />
      <OtherDesign imageId={1} displayValue="none" topValue="70%" leftValue="-50px" hightValue="156px" />
      <OtherDesign imageId={1} displayValue="none" topValue="20%" leftValue="95%" hightValue="90px" rotationAngle="10" />

      <Box
        sx={{
          ...flexBetween
        }}
      >
        <SectionHeading categories="projects" />
        <OtherButton buttonName="View All →" itemsAlign="center" />
      </Box>

      <Grid
        sx={{
          display: "grid",
          justifySelf: "center",
          padding: "20px 0",
          gap: "30px",
          width: {
            xs: "60%",
            sm: "80%",
            md: "55%",
            lg: "45%"
          },
          gridTemplateColumns: {
              xs: "repeat(1,1fr)",
              sm: "repeat(2,1fr)"
          },
        }}
      >
        <ProjectCard projectId={1}/>
        <ProjectCard projectId={2}/>
      </Grid>

    </Box>
  );
}