import {Box,Typography} from "@mui/material"

export default function AboutCard(){

    return(<>
            <Box className="group origin-bottom-right -rotate-0 skew-x-3">
            <Box className="relative rounded-2xl w-74 h-40 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-0  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-2 before:top-0 before:w-74 before:h-38 before:-z-10">
                <Typography className="text-4xl font-bold">Passionate</Typography>
                <Typography className="text-amber-300 font-thin">Frontend Developer</Typography>
            </Box>
            </Box>
        </>
    )
}