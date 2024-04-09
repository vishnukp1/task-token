import * as React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
} from "@mui/material";

export default function DropDown({ value, logo }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 150, height: "auto", paddingY: 0 }}
      size="small"
    >
      <IconButton
        style={{
          position: "absolute",
          left: "0.1rem",
          top: "50%",
          transform: "translateY(-50%)",
          paddingRight: "8rem",
        }}
      >
        <img src={logo} alt="" />
      </IconButton>
      <InputLabel
        sx={{
          fontSize: "0.8rem",
          color: "black",
          position: "absolute",
          left: "1.2rem",
        }}
      >
        {value}
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
