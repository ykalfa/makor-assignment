import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Typography, Button } from "@material-ui/core";
import CustomizedSelects from "./CustomizedSelects";
import { withStyles } from "@material-ui/core/styles";

function SubBar({ numOfPages, currentPage }) {
  const StyledButton = withStyles({
    root: {
      background: "#262626",
      padding: "0 ",
      borderRadius: 0,
      border: 0,
      color: "white",
      height: "100%",
      width: "4vmin",
      boxShadow: "0",
      fontSize: "1.3vmin",
      minWidth: "0px",
      "&:hover": {
        backgroundColor: "#262626",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        backgroundColor: "#323232",
        height: "2.5vh",
      }}
    >
      <div style={{ display: "flex", width: "85%" }}>
        <Typography
          variant="p"
          style={{
            color: "white",
            padding: "4px",
            fontSize: "1.4vmin",
            marginRight: "2vmin",
          }}
        >
          {currentPage} of {numOfPages}
        </Typography>
        <div style={{ marginRight: "1.5vmin" }}>
          <StyledButton>Prev</StyledButton>
          <StyledButton>Next</StyledButton>
        </div>
        <CustomizedSelects selects={[50, 100, 250]} />
      </div>
      <div
        style={{
          display: "flex",
          padding: "4px",
          width: "15%",
          justifyContent: "flex-end",
        }}
      >
        <RefreshIcon
          style={{ fontSize: "1.4vh", color: "white", cursor: "pointer" }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
          fill="white"
          width="1.4vh"
          height="1.4vh"
          style={{ paddingLeft: "1vh" }}
        >
          <g>
            <path d="M0,0h24 M24,24H0" fill="none" />
            <path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default SubBar;
