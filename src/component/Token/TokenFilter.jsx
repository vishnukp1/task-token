import { Box, Typography, useMediaQuery } from "@mui/material";

const filterLimit = [
  { id: 12, label: "All",color:"black" },
  { id: 13, label: 142,color:"black" },
  { id: 14, label: 56,color:"red" },
  { id: 15, label: 88,color:"grey" },
];

const TokenFilter = () => {
  const matches = useMediaQuery('(min-width:1200px) and (max-width:1370px)');
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {filterLimit.map((column) => (
        <Box
          key={column.id}
          sx={{ mx: matches ? "8px":  "12px" , marginBottom: "10px", textAlign: "center" }}
        >
          <Typography sx={{ fontSize: matches ? "12px":  "16px" ,color:column.color,fontWeight:"bold"}} variant="subtitle1">
            {column.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TokenFilter;
