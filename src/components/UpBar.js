import React from "react";
import UpBtn from "./UpBtn";
import OpenWithIcon from '@material-ui/icons/OpenWith';
import CloseIcon from '@material-ui/icons/Close';

function UpBar({ upBtnContent }) {
  return (
    <div style={{display:"flex", justifyContent:"space-between", backgroundColor: "#262626", height: "2.5vh"}} >
      <div
        style={{ display: "flex", width:"85%" }}
      >
        <UpBtn content={upBtnContent} />
      </div>
      <div style={{ display:"flex", padding: "4px", width:"15%", justifyContent:"flex-end"}} >
          <OpenWithIcon style={{ fontSize: "1.4vh", color:"white", cursor:"pointer" }} />
          <CloseIcon style={{ fontSize: "1.4vh", color:"white", paddingLeft:"1vh", cursor:"pointer" }} />
      </div>
    </div>
  );
}

export default UpBar;
