import Card from "@mui/material/Card";
import { Box, Grid } from "@mui/material";
import PatientTable from "../table/PatientTable";
import StatusBar from "../statusbar/StatusBar";
import TokenFilter from "../Token/TokenFilter";
import TokenList from "../Token/TokenList";

const tokenDetails = [
  { id: 12, token: 1002 },
  { id: 13, token: 1003 },
  { id: 14, token: 1004 },
  { id: 15, token: 1007 },
  { id: 13, token: 1008 },
  { id: 14, token: 1000 },
 
];

export default function TokenCard() {
  return (
    <Card sx={{ p: '20px', boxShadow: "none",  height: "70vh" }}>
     

     
      <PatientTable title="New Petient">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
  
          }}
        >
          <Grid container>
            <Grid item sm={7} md={12} lg={5}>
              <TokenFilter />
            </Grid>
            <Grid item sm={5} md={12} lg={7}>
              <StatusBar />
            </Grid>
          </Grid>
        </Box>
        <TokenList value={tokenDetails} />
      </PatientTable>
    
    </Card>
  );
}
