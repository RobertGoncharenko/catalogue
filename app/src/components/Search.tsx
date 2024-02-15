import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import items from "../constants/items";


export default function Search() {
   return (
      <Stack spacing={2} sx={{ width: 340 }}>
         <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={items.map((option) => option.title)}
            renderInput={(params) => (
               <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                     ...params.InputProps,
                     type: "search",
                  }}
               />
            )}
         />
      </Stack>
   );
}
