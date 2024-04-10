import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  box: {
  
    justifyContent: "center", // Horizontally center the content
    padding: "5px",
    borderRadius: "5px",

  },
  text: {
    fontSize: "14px",
    whiteSpace: "nowrap",
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
    marginLeft: "5px",
  },


};

function LabelCounts({ value, count, bgcolor }) {
  const matches = useMediaQuery('(min-width:1200px) and (max-width:1370px)');
  return (
    <Box sx={styles.container}>
      <Box sx={{ ...styles.box, backgroundColor: bgcolor , width: matches ? "42x" : "86px",}}>
        <Typography variant="body1" sx={{ ...styles.text, fontSize: matches ? "6x" : "14px", }}>
          <span>{value}</span>
          <span style={styles.boldText}>{count}</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default LabelCounts;
