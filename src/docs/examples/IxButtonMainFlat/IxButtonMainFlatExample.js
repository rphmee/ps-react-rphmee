import React from "react";
import IxButtonMainFlat from "ps-react/IxButtonMainFlat";

export default function IxButtonMainFlatExample() {
  const helloExample = () => {
    console.log("Hello Example World!");
  };
  return (
    <>
      <IxButtonMainFlat
        type="small"
        handleClick={() => {
          console.log("small");
        }}
      />
      <IxButtonMainFlat
        type="medium"
        handleClick={() => {
          console.log("med");
        }}
      />
      <IxButtonMainFlat
        type="big"
        handleClick={() => {
          console.log("big");
        }}
      />
    </>
  );
}
