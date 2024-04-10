import React from 'react';
import "./select.css";
import { IconButton } from '@mui/material';

const filterLimit = [
    { id: 12, label: "All",color:"black" },
    { id: 13, label: 142,color:"black" },
    { id: 14, label: 56,color:"red" },
    { id: 15, label: 88,color:"grey" },
];

const Selects = ({ SelectValue, logo }) => {
  return (
    <div className="select-custom-container">
    
      <select
        className="select-custom"
        onChange={(e) => searchDepartment(e.target.value)}
      >
          <IconButton
        className="select-icon"
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          paddingLeft: ".1rem",
        }}
      >
        <img src={logo} alt="" />
      </IconButton>
        <option>{SelectValue}</option>
        {filterLimit.map((post, index) => (
          <option
            style={{ fontSize: "18px" }}
            key={index}
            value={post._id}
          >
            {post.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selects;
