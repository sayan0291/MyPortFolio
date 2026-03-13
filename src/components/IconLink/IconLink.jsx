import { IconButton } from "@mui/material";

export default function IconLink({ href, label, children }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </IconButton>
  );
}
