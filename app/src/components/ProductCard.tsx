import { FunctionComponent } from "react";
import { Card, CardContent, CardMedia, ListItem, Typography } from "@mui/material";
import { Product } from "../types";

type ProductCardProps = {
   item: Product;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({ item }) => {
   return (
      <ListItem>
         <Card sx={{ width: 240 }}>
            <CardMedia
               component="img"
               height="130"
               image={item.image}
               alt={item.title}
            />
            <CardContent>
               <Typography variant="h5">{item.title}</Typography>
               <Typography variant="h6">{item.price}$</Typography>
               <Typography variant="body2">{item.description}</Typography>
            </CardContent>
         </Card>
      </ListItem>
   );
};

export default ProductCard;
