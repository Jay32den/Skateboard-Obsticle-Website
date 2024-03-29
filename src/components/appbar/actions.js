import { Badge, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList, ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";


export default function Actions({matches}) {

    const { cart, setShowCart } = useUIContext();

    const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

    return(
        <Component>
        <MyList type="row">
            {/* <ListItemButton
                sx={{
                    justifyContent: "center",
                }}
            >
                <ListItemIcon
                sx={{
                    justifyContent: "center",
                    display: 'flex',
                    color: matches && Colors.secondary
                }}
            >

                </ListItemIcon>
            </ListItemButton>  */}
            {/* <Divider orientation="vertical" flexItem /> */}
            <ListItemButton
                sx={{
                    justifyContent: "center",
                  }}
            >
                <ListItemIcon
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: matches && Colors.secondary
                }}
                >
                    <Badge badgeContent={cart && cart.length} color="secondary">
                    <ShoppingCartIcon onClick={() => setShowCart(true)} />
                    </Badge>

                    
                </ListItemIcon>
            </ListItemButton> 
            <Divider orientation="vertical" flexItem />
            <ListItemButton
                sx={{
                    justifyContent: "center",
                  }}
            > 
                <ListItemIcon
                     sx={{
                        display: "flex",
                        justifyContent: "center",
                        color: matches && Colors.secondary
                     }}
                >
                    <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton> 
            <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        </MyList>
        </Component>
    )
}