import React from "react";
import TextInput from "ps-react/TextInput";
import PropTypes from "prop-types";

/** Text Input with integrated label to enforce consistency in layout, error display, label placement */
class ClickToEnterTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEntered: false, isHover: false, value: props.value };
  }

  onClick() {
    this.setState({ isEntered: true, isHover: false });
  }

  mouseOver() {
    this.setState({ isHover: true });
  }

  mouseOut() {
    this.setState({ isHover: false });
  }

  onClickField() {
    this.setState({ isEntered: true });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ isEntered: false });
    this.setState({ value: event.target.value });
    event.preventDefault();
    alert("Event Target Value: " + event.target.value);
  }

  render() {
    const { value, height, name } = this.props;
    return (
      <div style={{ display: "inline-block" }}>
        {this.state.isEntered ? (
          <form
            onSubmit={this.handleSubmit.bind(this)}
            onChange={this.handleChange.bind(this)}
          >
            <input
              type="text"
              name={name}
              placeholder={name}
              value={this.state.value}
            />
          </form>
        ) : (
          <h1
            onMouseOver={() => this.mouseOver()}
            onMouseOut={() => this.mouseOut()}
            onClick={() => this.onClickField()}
            style={{ border: this.state.isHover ? "2px solid white" : "" }}
          >
            {this.state.value}
          </h1>
        )}
      </div>
    );
  }
}

ClickToEnterTextField.propTypes = {
  /** Input Name. Recommend setting this to match object's property so a single change handler can be used */
  name: PropTypes.string.isRequired,

  /** Input Label */
  label: PropTypes.string.isRequired,

  /** Input Type */
  type: PropTypes.oneOf(["text", "number", "password"]),

  /** Mark label with asterisk if required */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occues */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

ClickToEnterTextField.defaultProps = {
  value: "PART NAME"
};

export default ClickToEnterTextField;
