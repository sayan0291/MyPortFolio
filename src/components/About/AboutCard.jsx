import {Box,Typography} from "@mui/material"

export default function AboutCard(){

    return(<>
            <Box className="group origin-bottom-right -rotate-0 skew-x-3">
            <Box className="relative rounded-2xl w-74 h-40  text-gray-50 flex bg-neutral-700 flex-col justify-center items-center gap-1">
                <Typography className="text-4xl font-bold">Passionate</Typography>
                <Typography className="text-amber-300 font-thin">Frontend Developer</Typography>
            </Box>
            </Box>
        </>
    )
}