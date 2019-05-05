import React from "react";
import ExpandingBar from "ps-react/ExpandingBar";

export default function ExampleBar() {
  return (
    <ExpandingBar duration={500} height={50} multiplier={1.5}>
      <div style={{ height: "auto" }}>
        <i
          className={"fa fa-cubes fa-3x"}
          style={{
            margin: "auto auto",
            float: "none",
            color: "#0d47a1",
            display: "inline-block",
            height: "100%"
          }}
        />
        <div
          style={{
            display: "inline-block",
            marginLeft: 10,
            marginTop: 0
          }}
        >
          <div>
            <h1
              style={{
                display: "inline-block",
                marginBottom: 0,
                color: "white"
              }}
            >
              PART NAME
            </h1>
          </div>
          <div>
            <h2
              style={{
                display: "inline-block",
                marginTop: 0,
                color: "white"
              }}
            >
              PART NUMBER
            </h2>
            <h2
              style={{
                display: "inline-block",
                marginLeft: 20,
                marginTop: 0,
                color: "white"
              }}
            >
              PART REVISION
            </h2>
          </div>
        </div>
      </div>
    </ExpandingBar>
  );
}
