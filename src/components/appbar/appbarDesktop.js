import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer,AppbarHeader,MyList,} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";


export default function AppbarDesktop ({ matches }) {
  const { setShowSearchBox } = useUIContext();
    return (
        <AppbarContainer>
            <AppbarHeader>Matt.FB</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="Contact Me"/>
                <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={() => setShowSearchBox(true)}/>
          </ListItemIcon>
        </ListItemButton>
            </MyList>
            <Actions matches={matches}/>
            </AppbarContainer>
            
    );
}
