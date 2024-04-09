import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PatientTable({ children }) {
  return (
    <Paper>
      {/* New Patient and Total 258 */}
      <Box sx={{ display: "flex", justifyContent: "space-between" ,px:"24px",pt:"20px"}}>
        <Typography sx={{ fontSize: "18px" }}>New Patient</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "15px" }}>Total</Typography>
          <Typography sx={{ fontWeight: "bold" }}>258</Typography>
        </Box>
      </Box>

      {children}
    </Paper>
  );
}
