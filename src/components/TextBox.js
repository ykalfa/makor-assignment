import React from "react";

function TextBox() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1vmin",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "#262626",
            height: "22vmin",
            width: "92%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <p style={{ paddingLeft: "1vmin", color: "rgb(1, 151, 230)" }}>
              Thu, 19 Nov 2020
            </p>
            <p style={{ paddingLeft: "1vmin", color: "white" }}>
              {" "}
              21:00:00 GMT{" "}
            </p>
          </div>
          <p
            style={{ color: "white", textAlign: "left", paddingLeft: "1vmin" }}
          >
            oiash asoid podas poua po pulk
          </p>
          <div style={{overflow:"hidden"}}>

          </div>
          <p
            style={{
              color: "rgb(255, 132, 33)",
              textAlign: "left",
              paddingLeft: "1vmin",
            }}
          >
            oiash asoid podas poua po pulk dwsfg o saofih og8asdf usaf iug iuug
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
