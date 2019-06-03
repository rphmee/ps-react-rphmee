import React from "react";
import IxButton from "ixc/lib/IxButton";

export default function ExampleButton() {
  const helloExample = () => {
    console.log("Hello Example World!");
  };
  return <IxButton handleClick={helloExample} />;
}
