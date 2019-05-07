import React from "react";
import ExpandingBar from "ps-react/ExpandingBar";
import ForTesting from "ps-react/ForTesting";

export default function ExampleBar() {
  return (
    <>
      <ExpandingBar duration={500} startHeight={90} endHeight={150}>
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
              marginLeft: "10px",
              marginTop: "0px"
            }}
          >
            <div>
              <h1
                style={{
                  display: "inline-block",
                  marginBottom: "0px",
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
                  marginTop: "0px",
                  color: "white"
                }}
              >
                PART NUMBER
              </h2>
              <h2
                style={{
                  display: "inline-block",
                  marginLeft: "20px",
                  marginTop: "0px",
                  color: "white"
                }}
              >
                PART REVISION
              </h2>
            </div>
          </div>
          <div />
        </div>
      </ExpandingBar>
    </>
  );
}
