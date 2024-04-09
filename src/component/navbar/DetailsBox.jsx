import { Box, Typography } from "@mui/material";

const DetailsBox = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,

        textAlign: "center",
        borderRight: "1px solid black",
        paddingX: "6px", // Added padding on the sides
      }}
    >
      <Typography sx={{ fontSize: "10px" }} variant="subtitle1">
        {children}
      </Typography>
    </Box>
  );
};

export default DetailsBox;
