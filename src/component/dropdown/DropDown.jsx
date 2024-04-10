import * as React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
} from "@mui/material";

export default function DropDown({ SelectValue, logo, onChange }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
    onChange(selectedValue); // Call the onChange function with the updated value
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 150, height: "auto", paddingY: 0, position: 'relative' }} // Added relative positioning
      size="small"
    >
      <IconButton
        sx={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          paddingLeft: "0.5rem", // Adjusted padding
          zIndex: 1, // Ensure the icon button is above the border
        }}
      >
        <img src={logo} alt="" />
      </IconButton>
      <InputLabel
        sx={{
          fontSize: "0.8rem",
          color: "black",
          position: "absolute",
          left: "2.5rem", // Adjusted left position
          top: "50%", // Center vertically
          transform: "translateY(-50%)",
          zIndex: 0, // Ensure the label is below the border
        }}
      >
        {SelectValue}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="All"
        onChange={handleChange}
        sx={{ paddingTop: 0, paddingBottom: 0, fontSize: "0.8rem" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
