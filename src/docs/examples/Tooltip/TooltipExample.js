import React from "react";
import Tooltip from "ixc/lib/Tooltip";
import IxButton from "ixc/lib/IxButton";

export default class TooltipExample extends React.Component {
  render() {
    return (
      <>
        <div style={{ display: "inline-block" }}>
          <IxButton />
          <Tooltip direction="left" />
        </div>
        <div style={{ display: "inline-block" }}>
          <IxButton />
          <Tooltip direction="right" />
        </div>
        <div style={{ display: "inline-block" }}>
          <Tooltip direction="up" />
          <IxButton />
        </div>
        <div style={{ display: "inline-block" }}>
          <IxButton />
          <Tooltip direction="down" />
        </div>
      </>
    );
  }
}
