import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropDown from "../dropdown/DropDown";
import ReceptionistDetails from "./ReceptionistDetails";
import logo from "../../assets/image/Profile (1).png";
import image from "../../assets/image/image 101.png";
import React from "react";

const options = ["Option 1", "Option 2", "Option 3"];

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isScreenLarge = useMediaQuery("(min-width:750px)");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        color: "black",
        boxShadow: "none",
        height: "55px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: "21px" }}>
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={logo} />
            </IconButton>
          </Tooltip>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Ankit Gupta
            </Typography>
            <ReceptionistDetails />
          </Box>
          <DropDown logo={image} value="AIIA Hospital" />
        </Box>
        <div>
          {/* Hamburger menu for mobile devices */}

          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0, mb: "21px" }}>
              <Avatar alt="Remy Sharp" src={logo} />
            </IconButton>
          </Tooltip>
          {isScreenLarge ? (
            <Button
              aria-controls="dropdown-menu"
              aria-haspopup="true"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />} // Add dropdown icon
              sx={{ textTransform: "none", color: "black", ...(isScreenLarge && { mb: "18px" }) }}
            >
              Ankit gupta
            </Button>
          ) : (
            <Typography variant="body1" sx={{ color: "black" }}>
              ankit gupta
            </Typography>
          )}
          <Menu
            id="dropdown-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{ style: { border: "none" } }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
