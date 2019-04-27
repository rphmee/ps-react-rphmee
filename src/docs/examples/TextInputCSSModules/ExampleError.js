import React from "react";
import TextInputCSSModules from "ps-react/TextInputCSSModules";

/** Required TextBox with Error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputCSSModules
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
