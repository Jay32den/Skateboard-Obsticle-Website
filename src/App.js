import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Products from "./components/products";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import Cart from "./components/cart";
import { BrowserRouter } from "react-router-dom";

function App() {

  let navBar
    switch (window.location.pathname) {
      case "/home":
        navBar = App
        break;
    case "/products":
        navBar = Products
        break;
    }
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
            <Cart/>
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
