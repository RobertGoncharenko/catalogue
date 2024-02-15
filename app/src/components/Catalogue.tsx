import { Box, Button, Grid, List } from "@mui/material";
import items from "../constants/items";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Catalogue = () => {
    const [isGrid, setIsGrid] = useState(false);

    return (
        <>
            <Box>
                <Button onClick={() => setIsGrid(false)}>List</Button>
                <Button onClick={() => setIsGrid(true)}>Grid</Button>
            </Box>
            {isGrid ? (
                <Grid container spacing={1}>
                    {items.map(item => (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                            <ProductCard item={item} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <List>
                    {items.map(item => (
                        <ProductCard item={item} key={item.id} />
                    ))}
                </List>
            )}
        </>
    )
};

export default Catalogue;
