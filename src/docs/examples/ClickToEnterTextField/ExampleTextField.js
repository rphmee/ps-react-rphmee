import React from "react";
import ClickToEnterTextField from "ps-react/ClickToEnterTextField";

/** Optional TextBox */
export default function ExampleTextField() {
  return (
    <ClickToEnterTextField
      htmlId="example-optional"
      name="firstname"
      onChange={() => {}}
    />
  );
}
