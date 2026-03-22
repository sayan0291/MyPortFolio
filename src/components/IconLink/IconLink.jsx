import { IconButton } from "@mui/material";
import { IconLinkButton } from "../OtherDesign/Other";

export default function IconLink({ href, label, children }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      sx={
        IconLinkButton
      }
      >
      {children}
    </IconButton>
  );
}
