import {Box,Typography} from "@mui/material"
import { aboutimagestyle,h3style,aboutpstyle,aboutContent } from "../OtherDesign/Other"

export default function AboutContent({aboutid}){
    const matchedContent = aboutContent.find(obj => obj.id === aboutid);

    return(<>
            {matchedContent ? (
                <Box className="w-100" key={matchedContent.id}>
                    <Box className="flex items-center">
                        <Box component="img" src={matchedContent.imageLink} sx={aboutimagestyle} />
                        <Typography sx={h3style}>{matchedContent.name}</Typography>
                    </Box>
                    <Typography sx={aboutpstyle}>{matchedContent.paragraph}</Typography>
                </Box>
            ) : (
                <Typography>No content found</Typography>
            )}
        </>
    )
}