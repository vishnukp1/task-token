import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@mui/material';


const SearchIcons = () => {
  return (
    <>
   
      <TextField
      placeholder="Search"
      type="search"
  
      size="small"
      InputProps={{
        endAdornment: (
          <SearchIcon style={{ color: 'red' }} />
        ),
        sx: {
          width:"300px",
          bgcolor:"white",
          borderRadius: '50px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px',
          },
        },
      }}
    />
    </>
  );
};

export default SearchIcons;
