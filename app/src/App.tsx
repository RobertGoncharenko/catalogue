import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./constants/routes";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import {
   Badge,
   Box,
   Container,
   CssBaseline,
   Link,
   Typography,
} from "@mui/material";
import nav from "./constants/nav";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuBurger from "./components/MenuBerger";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const router = createBrowserRouter(routes);


function App() {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Container maxWidth="md">
            <Box
               component="header"
               mt={2}
               sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
               }}
            >
               <MenuBurger />
               <Typography variant="h6">LOGO</Typography>
               <Box>
                  {nav.map((item) => (
                     <Link href={item.link} key={item.link} mx={1}>
                        {item.caption}
                     </Link>
                  ))}
               </Box>
               <Box 
                  display="flex"
                  justifyContent="space-between"
               >
                  <AccountCircleIcon sx={{mr: 2}}/>
                  <Badge color="primary" badgeContent={1}>
                     <ShoppingCartIcon />
                  </Badge>
               </Box>
            </Box>
         </Container>
         <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
            <RouterProvider router={router} />
         </Container>
      </ThemeProvider>
   );
}

export default App;
