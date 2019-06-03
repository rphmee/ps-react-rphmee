import React from "react";
import TextInputStyledComponents from "ixc/lib/TextInputStyledComponents";

/** Required TextBox with Error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
        htmlId="example-required-error"
        value="wrong"
        type="password"
        label="Password"
        name="passwordInput"
        onChange={() => {}}
        required
        error="Incorrect Password"
      />
    );
  }
}
