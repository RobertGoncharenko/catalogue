import useCartStore from "../store/cartSlice";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCart = () => {
   const { items, removeFromCart, clearCart } = useCartStore();

   return (
      <>
         <Typography variant="h1">Shopping Cart</Typography>
         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
               {items.map((item, index) => (
                  <ListItem key={index}>
                     {item.title} - {item.price}
                     <DeleteIcon
                        onClick={() => removeFromCart(index)}
                        color="error"
                     >
                        Remove
                     </DeleteIcon>
                  </ListItem>
               ))}
            </List>
         </Box>
         <Button onClick={clearCart}>Clear Cart</Button>
      </>
   );
};

export default ShoppingCart;
