import React from "react";
import ExpandingBar from "ps-react/ExpandingBar";
import ForTesting from "ps-react/ForTesting";
import IxButtonMainFlat from "ps-react/IxButtonMainFlat";

export default function ExampleBar() {
  return (
    <>
      <ExpandingBar startHeight={50} endHeight={150}>
        <div style={{ height: "auto" }}>
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
                  color: "white",
                  paddingBottom: 0
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
                  color: "white",
                  marginBottom: 10
                }}
              >
                PART NUMBER
              </h2>
              <h2
                style={{
                  display: "inline-block",
                  marginLeft: "20px",
                  marginTop: "0px",
                  color: "white",
                  marginBottom: 10
                }}
              >
                PART REVISION
              </h2>
            </div>
            <div>
              <div style={{ display: "inline-block" }}>
                <IxButtonMainFlat
                  type="small"
                  backgroundColor="green"
                  label="NEXT"
                />
              </div>
              <div
                style={{
                  display: "inline-block",
                  marginLeft: 25
                }}
              >
                <label
                  class="container"
                  style={{ fontColor: "white", marginRight: 25 }}
                >
                  Part
                  <input type="radio" checked="checked" name="Part" />
                  <span class="checkmark" />
                </label>
                <label class="container" style={{ fontColor: "white" }}>
                  Assembly
                  <input type="radio" name="Assembly" />
                  <span class="checkmark" />
                </label>
              </div>
            </div>
          </div>
          <div />
        </div>
      </ExpandingBar>
    </>
  );
}
