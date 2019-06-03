import React from "react";
import Ellipses from "ixc/lib/Ellipses";

export default function EllipsesExample() {
  return (
    <>
      <Ellipses direction="row" />
      <Ellipses direction="column" size={5} color="red" />
    </>
  );
}
