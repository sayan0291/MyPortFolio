import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Box } from "@mui/material";
import { ProjectsDetails } from "../OtherDesign/Other"
import ProjectCard from "./ProjectCard";
import SectionHeading from "../OtherDesign/SectionHeading"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from "swiper/modules"

export default function Projects() {
  return (
    <Box id="projects" sx={{ bgcolor: "#EBEFFF"}}>

      <SectionHeading categories="Projects" />

      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={20}
        mousewheel={true}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
       }}
        loop={false}
        grabCursor={true}
        centeredSlides={false}
        style={{ paddingBottom: "50px" }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3
          }
        }}
      >

        {ProjectsDetails.map((obj) => (
          <SwiperSlide key={obj.id}>
            <ProjectCard
              num={obj.value}
              name={obj.ProjectName}
              gitLink={obj.gitLink}
              skillNames={obj.skillNames}
            >
              {obj.childrenIcon}
            </ProjectCard>
          </SwiperSlide>
        ))}

      </Swiper>

    </Box>
  );
}