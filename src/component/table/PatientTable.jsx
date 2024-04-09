import { Box, Paper, Typography } from "@mui/material";

export default function PatientTable({ children, title }) {
  return (
    <Paper sx={{ pr: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "24px",
          pt: "20px",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} mb={2}>
          {title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "15px" }}>Total</Typography>
          <Typography sx={{ fontWeight: "bold" }}>258</Typography>
        </Box>
      </Box>

      {children}
    </Paper>
  );
}
