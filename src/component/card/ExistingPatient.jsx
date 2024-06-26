import Card from "@mui/material/Card";
import { Box, Grid } from "@mui/material";
import PatientTable from "../table/PatientTable";
import StatusBar from "../statusbar/StatusBar";
import TokenFilter from "../Token/TokenFilter";
import TokenList from "../Token/TokenList";

const tokenDetails = [
  { id: 12, token: 1001 },
  { id: 13, token: 1004 },
  { id: 14, token: 1005 },
  { id: 15, token: 1006 },
];

export default function ExistingPatients() {
  return (
    <Card sx={{p: '20px', boxShadow: "none", height:"70vh" }}>
      <PatientTable title="Existing Patient">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Grid container>
            <Grid item sm={6} md={12} lg={5}>
              <TokenFilter />
            </Grid>
            <Grid item sm={6} md={12} lg={7}>
              <StatusBar />
            </Grid>
          </Grid>
        </Box>
        <TokenList value={tokenDetails} />
      </PatientTable>
    </Card>
  );
}
