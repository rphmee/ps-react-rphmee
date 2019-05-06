import React from "react";
import TextInput from "ps-react/TextInput";

/** Required TextBox with Error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-required-error"
        value="wrong"
        type="password"
        label="Password"
        name="passwordInput"
        onChange={() => {}}
        onSubmit={() => {}}
        required
        error="Incorrect Password"
      />
    );
  }
}
