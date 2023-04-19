import { IconButton, List, Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors, DrawerWidth } from "../theme";
import { textPopUpTop } from "../../animation";
import "@fontsource/days-one";

// container
export const AppbarContainer = styled(Box)(() => ({  
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
  alignItems: 'center',
    padding: '2px 8px'
}));


// header 
export const AppbarHeader = styled(Typography)(() => ({
    padding: "9px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: '"days-one", "sans-serif"',
    color: Colors.secondary
  }));

  // headerAppBar
  export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 20,
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem"
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid ${Colors.border}`
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,      
}));

export const Link = styled
