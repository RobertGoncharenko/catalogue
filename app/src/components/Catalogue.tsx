import { Box, Button, Grid, List, SvgIcon, SvgIconProps } from "@mui/material";
import items from "../constants/items";
import ProductCard from "./ProductCard";
import { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import Search from "./Search";

const ListIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <FormatListBulletedIcon />
        </SvgIcon>
    )
}
const GridIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <GridViewIcon />
        </SvgIcon>
    )
}

const Catalogue = () => {
    const [isGrid, setIsGrid] = useState(false);

    return (
        <>
            <Box 
                display="flex"
                justifyContent="space-around"    
            >   
                <Box mr="40px">
                    <Search />
                </Box>
                <Box>
                    <Button onClick={() => setIsGrid(false)}><ListIcon/></Button>
                    <Button onClick={() => setIsGrid(true)}><GridIcon /></Button>
                </Box>
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
