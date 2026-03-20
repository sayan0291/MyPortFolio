import {ListItem,ListItemText} from "@mui/material"
import { color } from "motion"
import { NavLink } from "react-router-dom"

export default function OtherButton({buttonName,itemsAlign,href}){
    return(
        <ListItem button
            component={NavLink}
            to={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                cursor: "pointer",
                alignSelf: itemsAlign,
                border: "1px solid #BECBD6",
                borderRadius: "2px",
                width: "auto",
                padding: "0px 10px"
            }}
        >
            <ListItemText
                primary={buttonName}
                sx={{
                    "& .MuiTypography-root":{
                    color: "#FFFFFF",
                    fontFamily: "Fira Code",
                    fontSize: {
                        xs: "11px",
                        sm: "13px",
                        md: "15px",
                        lg: "17px"
                    }
                }
                }}
            />
        </ListItem>
    )
}