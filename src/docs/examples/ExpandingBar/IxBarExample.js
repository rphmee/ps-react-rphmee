import React from "react";
import ExpandingBar from "ps-react/ExpandingBar";
import ClickToEnterTextField from "ps-react/ClickToEnterTextField";

export default function ExampleBar() {
  function onSubmit(event) {
    this.setState({ isEntered: false });
    this.setState({ isHover: false });
    /** make any additonal calls or logic when submitting here, e.g. updating the DB */
    event.preventDefault();
  }

  function onChange(event) {
    this.setState({ value: event.target.value });
    /** make any additional calls or logic when submitting here */
  }

  return (
    <ExpandingBar duration={500} startHeight="auto" endHeight="auto">
      <div style={{ height: "auto", display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className={"fa fa-cubes fa-3x"} style={{ color: "#0d47a1" }} />
        </div>
        <div
          style={{
            display: "inline-block",
            marginLeft: "10px",
            marginTop: "0px"
          }}
        >
          <ClickToEnterTextField
            leftMargin="10px"
            topMargin="10px"
            color="white"
            name="partname"
            onChange={onChange}
            onSubmit={onSubmit}
            value="BLACK STEEL MULTI TOOL"
          />
          <div>
            <ClickToEnterTextField
              bottomMargin="10px"
              topMargin="5px"
              leftMargin="10px"
              color="white"
              name="partnum"
              onChange={onChange}
              onSubmit={onSubmit}
              value="PRT-2322"
            />
            <ClickToEnterTextField
              name="partrev"
              onChange={onChange}
              onSubmit={onSubmit}
              bottomMargin="10px"
              topMargin="5px"
              leftMargin="50px"
              value="B3"
              color="white"
            />
          </div>
        </div>
      </div>
    </ExpandingBar>
  );
}
