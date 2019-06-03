import React from "react";
import TextInputBEM from "ixc/lib/TextInputBEM";

/** Required TextBox with Error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputBEM
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
