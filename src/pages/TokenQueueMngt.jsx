import { Box, Grid } from "@mui/material";
import Navbar from "../component/navbar/Navbar";
import Title from "../component/title/Title";
import TokenCard from "../component/card/TokenCard";
import SpecialNeed from "../component/card/SpecialNeed";
import Sidebar from "../component/sidebar/Sidebar";
import ExistingPatients from "../component/card/ExistingPatient";
import SearchBar from "../component/search/SearchBar";

const TokenQueueMngt = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
    <Sidebar />
    <Box sx={{ flex: 1 }}>
      <Box sx={{ background: "#F6F6F6", height: "100%" }}>
        <Navbar />
        <Box mx={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            marginTop:"12px"
            }}
          >
            <Box sx={{ marginTop:"18px"}}>
            <Title  />
            </Box>
           
           <SearchBar/>
          </Box>
          <Grid container spacing={2}>
            <Grid item md={4} sm={12} xs={12}>
              <TokenCard />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
             <ExistingPatients/>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <SpecialNeed />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default TokenQueueMngt