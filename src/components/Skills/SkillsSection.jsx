import { Box,Grid,Typography } from "@mui/material";
import { h5style,imagestyle,pstyle } from "../Other";

export default function SkillsSection({title,Skills}){

    return(
        <Box sx={{display: "flex",flexDirection: "column"}}>
                <Typography sx={h5style}>{title}</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12,lg: 12 }} >
                    {Skills.map((obj, index) => (
                        <Grid key={Skills.id} size={{ xs: 6, sm: 4, md: 4,lg: 4 }} sx={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",gap: {xs: "5px",md: "9px"}}} >
                            <Box component="img" src={obj.imageurl} sx={imagestyle} />
                            <Typography sx={pstyle}>{obj.Name}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
    )
}