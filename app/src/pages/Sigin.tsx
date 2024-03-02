import {
   Box,
   Button,
   Container,
   Link,
   TextField,
   Typography,
} from "@mui/material";

const Sigin = () => {
   return (
      <Container>
         <Typography variant="h1">Sign In</Typography>

         <Box maxWidth={400} textAlign={"center"} margin={"auto"}>
            <TextField
               autoFocus={true}
               label="Email"
               variant="outlined"
               fullWidth
               margin="normal"
            />

            <TextField
               label="Password"
               type="password"
               variant="outlined"
               fullWidth
               margin="normal"
            />

            <Button variant="contained" color="primary" fullWidth>
               Sign In
            </Button>

            <Typography variant="body2">
               Don't have an account?
               <Link href="/signup">Sign Up</Link>
            </Typography>
         </Box>
      </Container>
   );
};

export default Sigin;
