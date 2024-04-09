
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import RoojhLogo from "../../assets/image/roojh.png";
import Home from "../../assets/image/home.png";

const Sidebar = () => {
  return (
    <Box
      open={true}
      sx={{ bgcolor: "#284385", width: "65px" }}
      onClose={() => {}}
    >
      <List>
        <ListItem>
          <IconButton>
            <img
              style={{ width: "4rem", marginLeft: "-25px",marginTop:"-12px" }}
              src={RoojhLogo}
              alt=""
            />
          </IconButton>
        </ListItem>
        <IconButton sx={{display:"flex",flexDirection:"column",ml:"-9px"}}>
          <img style={{ width: "4rem" }} src={Home} alt="" />
          <Typography sx={{ color: "#E67136",mt:"-28px" }}>Home</Typography>
        </IconButton>
   
      </List>
    </Box>
  );
};

export default Sidebar;
