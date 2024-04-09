import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import StatusBar from "../statusbar/StatusBar";
import TokenFilter from "../Token/TokenFilter";
import TokenList from "../Token/TokenList";
import DropDown from "../dropdown/DropDown";
import LabelCounts from "../labels/LabelCounts";

const tokenDetails = [
  { id: "12", token: "100 (Pregnancy)" },
  { id: "13", token: "101 (Physical Challages)" },
  { id: "14", token: "102 (Senior Citizen)" },
  { id: "15", token: "103 (others)" },
];
const SpecialNeed = () => {
  return (
    <Card sx={{ boxShadow: "none", mx: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>Patient with Special Needs</Typography>
        <DropDown logo="" value="All" />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" ,mx:"10px" }}>
        <StatusBar />

        <Typography variant="h6">Total 258</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between",mx:"10px" }}>
        <TokenFilter />

        <LabelCounts value="New" count={86} />
        <LabelCounts value="Existing" count={200} />
      </Box>
      <TokenList value={tokenDetails} />
    </Card>
  );
};

export default SpecialNeed;
