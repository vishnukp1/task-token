import { TextField } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <>
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        id="phoneNumber"
        autoComplete="phoneNumber"
        autoFocus
        placeholder="search"
        InputProps={{
          endAdornment: <SearchIcon style={{ color: "#F46524",  marginRight: "12px" }} />, // Adjusted icon margin
          disableUnderline: true,
        }}
        sx={{
          height: "40px",
          width: "300px",
        
          backgroundColor: "white",
          borderRadius: "50px",
         
          "& .MuiInputBase-input": {
            marginLeft:"13px",// 
            mt:"4px"
          },
          "&::placeholder": {
         
          },
        }}
      />
    </>
  );
};

export default SearchBar;
