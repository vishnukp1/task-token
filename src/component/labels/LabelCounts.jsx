import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  box: {
    display: "flex",
    padding: "5px",
    borderRadius: "5px",
  },

  existingBox: {
    backgroundColor: "#D1ECF1",
  },
  text: {
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  boldText: {
    fontWeight: "bold",
    marginLeft: "5px",
  },
};

function LabelCounts({ value, count }) {
  return (
    <Box sx={styles.container}>
      <Box sx={{ ...styles.box, ...styles.existingBox }}>
        <Typography variant="body1" sx={{ ...styles.text }}>
          <span>{value}</span>
          <span style={styles.boldText}>{count}</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default LabelCounts;
