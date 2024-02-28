
import { useState } from "react";
import { Input } from "@mui/material";

interface SearchProps {
   onSearch: (value: string) => void;
}

interface SearchProps {
   onSearch: (value: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
   const [searchTerm, setSearchTerm] = useState("");

   const handleSearch = (value: string | null) => {
      if (value !== null) {
         setSearchTerm(value);
         onSearch(value);
      }
   };

   return (
      <Input
      sx={{width: "40%"}}
         value={searchTerm}
         onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
         }}
         placeholder="Search...."
      />
   );
}
