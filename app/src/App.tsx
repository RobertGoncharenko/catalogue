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
import useCartStore from "./store/cartSlice";

const router = createBrowserRouter(routes);

function App() {

   const {items} = useCartStore();
   const count: number = items.length;

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Container maxWidth="lg">
            <Box
               component="header"
               mt={2}
               sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
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
               <Box display="flex" justifyContent="space-between" color="#2080e0">
                  <Link href="/profile" mx={1}>
                     <AccountCircleIcon sx={{ mr: 2 }} />
                  </Link>
                  <Link href="/cart" mx={1}>
                  <Badge color="error" badgeContent={count}>
                     <ShoppingCartIcon />
                  </Badge>
                  </Link>
               </Box>
            </Box>
         </Container>
         <Container component="main" sx={{minHeight: "800px", mt: 8, mb: 2 }} maxWidth="md">
            <RouterProvider router={router} />
         </Container>
         <Container component="footer" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
         <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" bgcolor={"#2080e0"}>
            <Typography variant="body2" color="text.secondary" align="center">
                  
                     &copy; {new Date().getFullYear()}
            </Typography>
         </Box>
         </Container>
      </ThemeProvider>
   );
}

export default App;
