import { useTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import { Avatar,Button, IconButton, Divider, Drawer, Paper, Typography, useMediaQuery } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { Colors } from '../../styles/theme';
import { Box } from "@mui/system";

export default function Cart() {
    const { cart, setShowCart, showCart, setCart} = useUIContext();
    const [price, setPrice] = useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    // const handleRemoveFromCart = (id) => {
    //     const arr = cart.filter((item) => item.id !== id);
    //     setShowCart(arr);
    //     handlePrice();
    //   };

      const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
      };

      const handleRemoveFromCart = (item) => {
        setCart(
          cart.filter(c => c.id !== item.id)
        );
    }
    
      useEffect(() => {
        handlePrice(); 
      });
    
    
    const cartContent = cart.map (item => (
        <Box key={item.id}>
            <Box
            display='flex'
            sx= {{ pt: 2, pb: 2 }}
            alignItems="start"
            justifyContent={"space-between"}>
            <Avatar src={item.image} sx={{ width:96,height:96, mr:2}} />            
            
        <Box display="flex" flexDirection={"column"}>
            <Typography variant="h6">{item.name}</Typography>
            {!matches && <Typography variant="subtitle2">{item.description}</Typography>}
        </Box>
{/* 
        <>
            <button onClick={() => handleChange(item, +1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </> */}

        <Typography variant="body1" justifyContent={"end"}>
            ${item.price}
            <Button fontSize="small" name="removeCartItem" onClick={() => {handleRemoveFromCart(item.id)}}>Remove</Button>
        </Typography>
            </Box>
            {matches && <Typography variant="subtitle2">{item.description}</Typography>}
            <Divider variant="inset" />
        </Box>
        
        
    ));

    return (
        <Drawer
        open={showCart}
        onClose= {() => setShowCart(false)}
        anchor="right"
        PaperProps={{
            sx: {
                width:matches ? '100%' : 500,
                background: Colors.light_gray,
                borderRadius: 0
            
            }
        }}
        >
            {cart.length > 0 ? (
            <Box
            sx={{ p : 4 }}
            justifyContent={"center"}
            flexDirection="column"
            alignItems="center"
            >
                <Typography variant="h3" color={Colors.black}>
                    Your Cart
                </Typography>
                <Typography variant="body1" color={Colors.muted}>
                    {" "}
                    Text in the Cart
                </Typography>
                {/* <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))} */}
                <Paper
                elevation={0}
                sx={{mt: 2,
                    width:"90%",
                    padding:4,
                }}
                >
            {cartContent}
            </Paper>
            <Button sx={{mt:4}} variant="contained">
                Proceed to Payment
            </Button>
            </Box>
            ) : ( 
            <Box
            sx={{
                p:4,
            }}
            display="flex"
            justifyContent={"center"}
            flexDirection="column"
            alignItems="center"
            >
                <Typography variant={matches ? "h5" : "h3"} color={Colors.black}>
                Your Cart is Empty
                </Typography>
                </Box>
                )}
                <Button onClick={() => setShowCart(false)}>Close</Button>
        </Drawer>
    )
};