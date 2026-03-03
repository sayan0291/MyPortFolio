import {Box,Typography} from '@mui/material'
import SectionHeading from '../SectionHeading'

export default function About(){

    const imagestyle = {
        width: "40px"
    }

    const h3style = {
        fontFamily: "Montserrat",
        fontSize: {
            xs: "17px",
            sm: "18px",
            md: "20px",
            lg: "22px"
        },
        fontWeight: "bold"
    }

    const pstyle = {
        fontFamily: "Open Sans",
        fontSize: "12px",
        fontWeight: "light"
    }

    return(
        <Box>
            <SectionHeading categories="ABOUT ME"/>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: {
                        md: "row",
                        xs: "column"
                    },
                    alignItems: "center",
                    gap: "40px"
                }}>
                    <Box className="w-80">
                        <Box className="flex items-center">
                            <Box component="img" src='/src/assets/design.png' sx={imagestyle} />
                            <Typography sx={h3style}>DESIGN</Typography>
                        </Box>
                        <Typography sx={pstyle}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</Typography>
                    </Box>
                    <Box className="w-80">
                        <Box className="flex items-center">
                            <Box component="img" src='/src/assets/developement.png' sx={imagestyle} />
                            <Typography sx={h3style}>DEVELOPEMENT</Typography>
                        </Box>
                        <Typography sx={pstyle}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</Typography>
                    </Box>
                </Box>
                <Box className="w-80">
                    <Box className="flex items-center">
                        <Box component="img" src='/src/assets/maintainance.png' sx={imagestyle} />
                        <Typography sx={h3style}>MAINTAINANCE</Typography>
                    </Box>
                    <Typography sx={pstyle}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</Typography>
                </Box>
            </Box>
            <Box sx={{width: "100%",display: "flex",justifyContent: "center",padding: "50px"}}>
                <Box component="img" src='/src/assets/separatorBlack 1.png' sx={{}}/>
            </Box>
        </Box>
    )
}