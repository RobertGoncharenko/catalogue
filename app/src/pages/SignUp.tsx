import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";


export const SignUp = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
   };

   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
   };

   const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
   };

   const handleSubmit = () => {
      return console.log(`${email} ${password} ${confirmPassword}`);
      
   };

   return (
      <Container>
         <Typography variant="h1">Sign Up</Typography>
         <Box maxWidth={400} textAlign={"center"} margin={"auto"}>
            <TextField
               autoFocus={true}
               label="Email"
               variant="outlined"
               fullWidth
               margin="normal"
               value={email}
               onChange={handleEmailChange}
            />
            <TextField
               label="Password"
               type="password"
               variant="outlined"
               fullWidth
               margin="normal"
               value={password}
               onChange={handlePasswordChange}
            />
            <TextField
               label="Confirm password"
               type="password"
               variant="outlined"
               fullWidth
               margin="normal"
               value={confirmPassword}
               onChange={handleConfirmPasswordChange}
            />
            <Button
               variant="contained"
               color="primary"
               fullWidth
               disabled={password !== confirmPassword}
               onClick={handleSubmit}
            >
               Confirm
            </Button>
         </Box>
      </Container>
   );
};

export default SignUp;
