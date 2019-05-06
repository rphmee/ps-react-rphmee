import React from "react";
import ClickToEnterTextField from "ps-react/ClickToEnterTextField";

/** Optional TextBox */
export default function ExampleTextField() {
  function onSubmit(event) {
    this.setState({isEntered: false});
    this.setState({isHover: false});
    /** make any additonal calls or logic when submitting here, e.g. updating the DB */
    event.preventDefault();
  }

  function onChange(event) {
    this.setState({ value: event.target.value });
    /** make any additional calls or logic when submitting here */
  }

  return (
    <ClickToEnterTextField name="partname" onChange={onChange} onSubmit={onSubmit} />
  );
}
