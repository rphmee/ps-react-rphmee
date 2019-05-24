import React from "react";
import Ellipses from "ps-react/Ellipses";

export default function EllipsesExample() {
  return (
    <>
      <Ellipses direction="row" />
      <Ellipses direction="column" size={5} color="red" />
    </>
  );
}
