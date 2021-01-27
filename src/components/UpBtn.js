import React from "react";
import CropFreeIcon from "@material-ui/icons/CropFree";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function UpBtn({ content }) {
  return (
    <div
      style={{
        color: "#fff",
        backgroundColor:"#323232",
        height: "2.5vh",
        width:"50%",
        maxWidth:"120px",
        minWidth:"70px",
        padding: "4px",
        display: "flex",
        fontSize: "1vh",
        alignItems: "flexStart",
        justifyContent: "space-between",
        overflow:"hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap" 
      }}
    >
      <CropFreeIcon style={{ fontSize: "1.5vh" }} />
      <FiberManualRecordIcon style={{ fontSize: "1vh", color: "#27ac25" }} />
      {content}
    </div>
  );
}

export default UpBtn;
