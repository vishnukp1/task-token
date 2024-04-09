import { Box, Grid, IconButton, TableCell, Typography } from "@mui/material";
import DoubleArrow from "../../assets/image/Union.png";
import reload from "../../assets/image/Union (3).png";
import tick from "../../assets/image/Union (2).png";

const TokenList = ({ value }) => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      {value.map((column) => (
        <TableCell
          key={column.id}
          sx={{
            display: "flex",
            backgroundColor: column.bgcolor, // Accessing bgcolor from tokenDetails array
            alignItems: "center",
            paddingY: "10px",
            "&:hover": {
              backgroundColor: "#FFF8F4",
              cursor: "pointer",
             
            },
          }}
        >
          <Grid container>
            <Grid item xs={8} sm={8} md={6} lg={8}>
              <Typography sx={{ mr: "50%" }} variant="subtitle1">
                {column.token}
              </Typography>
            </Grid>

            <Grid item xs={4} sm={4} md={6} lg={4}>
              <IconButton sx={{ mr: "5%" }}>
                <img src={DoubleArrow} alt="" />
              </IconButton>
              <IconButton sx={{ mr: "5%" }}>
                <img src={tick} alt="" />
              </IconButton>

              <IconButton sx={{ mr: "5%" }}>
                <img src={reload} alt="" />
              </IconButton>
            </Grid>
          </Grid>
        </TableCell>
      ))}
    </Box>
  );
};

export default TokenList;
