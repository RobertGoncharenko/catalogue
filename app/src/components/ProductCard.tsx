import { FunctionComponent } from "react";
import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   ListItem,
   Typography,
} from "@mui/material";
import { Product } from "../types";

type ProductCardProps = {
   item: Product;
};

const ProductCard: FunctionComponent<ProductCardProps> = ({ item }) => {
   return (
      <ListItem>
         <Card sx={{ width: 240 , height: 350}}>
            <CardMedia
               component="img"
               height="130"
               image={item.image}
               alt={item.title}
            />
            <CardContent>
               <Typography variant="h5">{item.title}</Typography>
               <Typography variant="h6">{item.price}$</Typography>
               {/* <Typography variant="body2">{item.description}</Typography> */}
               <CardActions>
                  <Button variant="text">Comprar</Button>
               </CardActions>
            </CardContent>
         </Card>
      </ListItem>
   );
};

export default ProductCard;
