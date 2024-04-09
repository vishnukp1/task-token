import { Box, Typography } from "@mui/material";
import DetailsBox from "./DetailsBox";

const receptionistDate = [
  {
    id: "12",
    sex: "Female",

    age: "28Y",
    position: "Receptionist",

    number: 96335358,
  },
];
const ReceptionistDetails = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {receptionistDate.map((details) => (
        <Box key={details.id} sx={{ marginRight: "6px" ,display:"flex"}}>
          {" "}
       
          <DetailsBox>{details.sex}</DetailsBox>
          <DetailsBox>{details.age}</DetailsBox>
          <DetailsBox >{details.position}</DetailsBox>
       
          <Typography sx={{ fontSize: "10px",ml:"2px" }} variant="subtitle1">
            {details.number}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ReceptionistDetails;
