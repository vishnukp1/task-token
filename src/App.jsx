import { Box, Grid } from "@mui/material";
import Navbar from "./component/navbar/Navbar";
import SearchIcons from "./component/search/SearchIcons";
import Title from "./component/title/Title";
import TokenCard from "./component/card/TokenCard";
import SpecialNeed from "./component/card/SpecialNeed";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flex: 1 }}>
        <Box sx={{ background: "#F6F6F6" }}>
          <Navbar />
          <Box mx={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                my: "25px",
              }}
            >
              <Title />
              <SearchIcons />
            </Box>
            <Grid container spacing={2}>
              <Grid item md={4} sm={12} xs={12}>
                <TokenCard />
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <TokenCard />
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <SpecialNeed />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
