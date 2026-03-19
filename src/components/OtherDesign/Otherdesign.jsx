import dottedImage from "/someOther/Dots.svg"
import rectangleImage from "/someOther/Rectangle.svg"
import {Box} from "@mui/material"

export default function OtherDesign({imageId,displayValue,topValue,leftValue,hightValue}){

    const OtherImageArray = [
        {id:1, value:dottedImage, alterText: "Dotted Image"},
        {id:2, value:rectangleImage, alterText:"Reactangle Image"}
    ]

    const image = OtherImageArray.find(item => item.id === imageId)

    return(
        <Box component="img" src={image?.value} position="absolute"
            sx={{
                display: {
                    xs: displayValue,
                    md: "block"
                },
                height: hightValue,
                top: topValue,
                left: leftValue,
            }}
        />
    )
}