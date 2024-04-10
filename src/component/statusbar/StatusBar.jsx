import { Box, Typography, useMediaQuery } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const status = [
  {
    id: "population",
    label: "unattended",
    background: "#212121",
  },
  {
    id: "size",
    label: "Skipped",
    background: "#F16C6C",
  },
  {
    id: "size",
    label: "Completed",
    background: "#999999",
  },
];

const StatusBar = () => {
  const matches = useMediaQuery('(min-width:1200px) and (max-width:1370px)');

  return (
    <Box sx={{ display: "flex", ml: matches ? "2px":  "18px" }}>
      {status.map((column) => (
        <Box
          key={column.id}
          sx={{
            display: "flex",
            flex: 1,
            minWidth: column.minWidth,
            textAlign: "center",
            ml: matches ? "px" : 0,
          }}
        >
          <Brightness1Icon
            sx={{ width: matches ? "8px":  "13px" , mr: "5px", color: column.background }}
          />
          <Typography
            sx={{ fontSize: matches ? "8px":  "12px" , mt: matches ? "5px":  "1px", mr: "5px" }}
            variant="subtitle1"
          >
            {column.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StatusBar;
