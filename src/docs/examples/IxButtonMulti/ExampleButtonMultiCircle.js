import React from "react";
import IxButton from "ixc/lib/IxButton";
import IxButtonMulti from "ixc/lib/IxButtonMulti";

export default function ExampleCirclesMulti() {
  return (
    <IxButtonMulti shape="circle" backgroundColor="white">
      <IxButton shape="circle" backgroundColor="white" />
      <IxButton shape="circle" backgroundColor="white" />
      <IxButton shape="circle" backgroundColor="white" />
    </IxButtonMulti>
  );
}
