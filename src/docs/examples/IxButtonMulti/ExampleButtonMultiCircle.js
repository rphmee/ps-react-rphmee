import React from "react";
import IxButton from "ps-react/IxButton";
import IxButtonMulti from "ps-react/IxButtonMulti";

export default function ExampleCirclesMulti() {
  return (
    <IxButtonMulti shape="circle" backgroundColor="white">
      <IxButton shape="circle" backgroundColor="white" />
      <IxButton shape="circle" backgroundColor="white" />
      <IxButton shape="circle" backgroundColor="white" />
    </IxButtonMulti>
  );
}