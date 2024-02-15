import { FunctionComponent } from "react";
import { Card, CardContent, ListItem, Typography } from "@mui/material";
import { Product } from "../types";

type ProductCardProps =  {
    item: Product
};

const ProductCard: FunctionComponent<ProductCardProps> = ({
    item,
}) => {
    return (
        <ListItem>
            <Card sx={{ width: "100%"}}>
                <CardContent>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body2">{item.price}$</Typography>
                </CardContent>
            </Card>
        </ListItem>
    )
};

export default ProductCard;
