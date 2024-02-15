import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./constants/routes";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import { Box, Container, CssBaseline, Link, Typography } from "@mui/material";
import nav from "./constants/nav";

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box component="header" mt={2} sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}>
          <Typography variant="h6">LOGO</Typography>
          <Box>
            {nav.map(item => (
              <Link href={item.link} key={item.link} mx={1}>{item.caption}</Link>
            ))}
          </Box>
        </Box>
      </Container>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  )
}

export default App
