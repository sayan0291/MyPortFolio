import { Box,Typography } from "@mui/material"

export default function SkillName({skillNames}){

    return(
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(3,1fr)"
                },
                gap: "10px",
                "& .MuiTypography-root": {
                    bgcolor:"#d8ebff",
                    textAlign: "center",
                    padding: "2px 10px",
                    borderRadius: "5px",
                    boxShadow: "0 0 3px 1px rgba(0,0,0,0.1)",
                    fontFamily: "monospace",
                },
                "& :hover": {
                    bgcolor: "#ffd1d1"
                }
            }}
        >
            {skillNames.map((skill,index) => 
                (<Typography index={index}>{skill}</Typography>)
            )}
        </Box>
    )
}