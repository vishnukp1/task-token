import { Box, Typography } from "@mui/material";
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
  return (
    <Box sx={{ display: "flex" }}>
      {status.map((column) => (
        <Box
          key={column.id}
          sx={{
            display: "flex",
            flex: 1,
            minWidth: column.minWidth,
            textAlign: "center",
            mx: "0%",
          }} // Adjusted font size
        >
          <Brightness1Icon
            sx={{ width: "13px", mr: "5px", color: column.background }}
          />
          <Typography
            sx={{ fontSize: "14px", mt: "1px", mr: "5px" }}
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
