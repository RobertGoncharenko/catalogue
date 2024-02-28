import { FunctionComponent } from "react";
import {
   Button,
   Card,
   CardContent,
   CardMedia,
   ListItem,
   Typography,
} from "@mui/material";
import { Product } from "../types";
import useCartStore from "../store/store";

type ProductCardProps = {
   item: Product;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({ item }) => {
   const { addToCart } = useCartStore((state) => ({
      addToCart: state.addToCart,
   }));

   return (
      <ListItem>
         <Card sx={{ width: 320, height: 320 }}>
            <CardMedia
               component="img"
               height="140"
               image={item.image}
               alt={item.title}
               loading="lazy"
            />
            <div>
               <Typography variant="h6">{item.category}</Typography>
               <Typography variant="h5">{item.title}</Typography>
            </div>
            <CardContent
               sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
               }}
            >
               <Typography variant="h6">{item.price}$</Typography>
               {/* <Typography variant="body2">{item.description}</Typography> */}
               <Button onClick={() => addToCart(item)} variant="text">
                  Buy
               </Button>
            </CardContent>
         </Card>
      </ListItem>
   );
};

export default ProductCard;
