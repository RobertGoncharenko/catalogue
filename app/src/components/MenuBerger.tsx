import { useState } from "react";

import { Drawer, IconButton, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuBurger = () => {
   const [open, setOpen] = useState(false);

   const handleToggleDrawer = () => {
      setOpen(!open);
   };

   return (
      <>
         <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleToggleDrawer}
         >
            <MenuIcon />
         </IconButton>
         <Drawer anchor="left" open={open} onClose={handleToggleDrawer}>
            <div
               role="presentation"
               onClick={handleToggleDrawer}
               onKeyDown={handleToggleDrawer}
            >
               <MenuItem onClick={handleToggleDrawer}>Item 1</MenuItem>
               <MenuItem onClick={handleToggleDrawer}>Item 2</MenuItem>
               <MenuItem onClick={handleToggleDrawer}>Item 3</MenuItem>
               <MenuItem onClick={handleToggleDrawer}>Item 4</MenuItem>
               <MenuItem onClick={handleToggleDrawer}>Item 5</MenuItem>
               <MenuItem onClick={handleToggleDrawer}>Item 6</MenuItem>
            </div>
         </Drawer>
      </>
   );
};

export default MenuBurger;
