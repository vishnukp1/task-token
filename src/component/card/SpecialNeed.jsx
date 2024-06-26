import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery } from "@mui/material";
import StatusBar from "../statusbar/StatusBar";
import TokenFilter from "../Token/TokenFilter";
import TokenList from "../Token/TokenList";
import DropDown from "../dropdown/DropDown";
import LabelCounts from "../labels/LabelCounts";

const tokenDetails = [
  { id: 12, token: 100 ,category :"(Pregnancy)", bgcolor: "#FFF1F1" },
  { id: 13, token: 101 ,category :"(Physically Challenge)", bgcolor: "#F1FAFF" },
  { id: 14, token: 102 ,category :"(Senior Citizen)", bgcolor: "#F1FAFF" },
  { id: 15, token: 103 ,category :"(others)", bgcolor: "#FFF1F1" },
];
const SpecialNeed = () => {
  const matches = useMediaQuery('(min-width:800px) and (max-width:1200px)');
  return (
    <Card sx={{p: '20px', boxShadow: "none" ,height:"70vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
       
        }}
      >
        <Typography sx={{ fontSize: "18px"}}>
          Patient with Special Needs
        </Typography>
        <DropDown logo="" SelectValue="All" />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mx: "10px" ,mb:"15px"}}
      >
        <StatusBar />

        <Typography variant="h6">Total 258</Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection:matches?"column":"row", justifyContent: "space-between", mx: "10px" , mb: "10px"}}
      >
        <TokenFilter />

        <Box sx={{display: "flex"}}>
        <LabelCounts bgcolor="#F1FAFF" value="New" count={86} />
        <LabelCounts bgcolor="#FFF1F1" value="Existing" count={200} />
        </Box>

       
      </Box>

      <TokenList value={tokenDetails} />
    </Card>
  );
};

export default SpecialNeed;
