
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import RoojhLogo from "../../assets/image/roojh.png";
import Home from "../../assets/image/home.png";

const Sidebar = () => {
  return (
    <Box
      open={true}
      sx={{ bgcolor: "#284385", width: "52px" }}
      onClose={() => {}}
    >
      <List>
        <ListItem>
          <IconButton>
            <img
              style={{ width: "3rem", marginLeft: "-25px" }}
              src={RoojhLogo}
              alt=""
            />
          </IconButton>
        </ListItem>
        <IconButton>
          <img style={{ width: "2rem" }} src={Home} alt="" />
        </IconButton>
        <Typography sx={{ color: "#E67136", mt: "-22px" }}>Home</Typography>
      </List>
    </Box>
  );
};

export default Sidebar;
