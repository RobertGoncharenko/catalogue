import { Box, Button, Grid, List} from "@mui/material";
import items from "../constants/items";
import ProductCard from "./ProductCard";
import { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import Search from "./Search";

const Catalogue = () => {
    const [isGrid, setIsGrid] = useState(false);
    const [filteredItems, setFilteredItems] = useState(items)

    const handleSearch = (searchTerm: string) => {
        const filtered = items.filter((item) => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredItems(filtered);
    }

    return (
        <>
            <Box 
                display="flex"
                justifyContent="space-between"
                alignContent={"center"} 
            >   
                
                    <Search onSearch={handleSearch} />
                
                <Box>
                    <Button onClick={() => setIsGrid(false)}><FormatListBulletedIcon /></Button>
                    <Button onClick={() => setIsGrid(true)}><GridViewIcon /></Button>
                </Box>
            </Box>

            {isGrid ? (
                <Grid container spacing={1}>
                    {filteredItems.map(item => (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                            <ProductCard item={item} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <List >
                    {filteredItems.map(item => (
                        <ProductCard item={item} key={item.id} />
                    ))}
                </List>
            )}
        </>
    )
};

export default Catalogue;
