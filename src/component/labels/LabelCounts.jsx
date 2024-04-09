import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "center", // Horizontally center the content
    padding: "5px",
    borderRadius: "5px",
    width: "6rem",
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
  return (
    <Box sx={styles.container}>
      <Box sx={{ ...styles.box, backgroundColor: bgcolor }}>
        <Typography variant="body1" sx={{ ...styles.text }}>
          <span>{value}</span>
          <span style={styles.boldText}>{count}</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default LabelCounts;
