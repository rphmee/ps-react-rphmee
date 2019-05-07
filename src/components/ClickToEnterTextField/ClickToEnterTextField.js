import React from "react";
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

  render() {
    const {
      height,
      name,
      onSubmit,
      onChange,
      leftMargin,
      topMargin,
      rightMargin,
      bottomMargin,
      display,
      color,
      ...props
    } = this.props;
    return (
      <div
        style={{
          display: display,
          margin: "0px 0px 0px 0px",
          padding: "0px"
        }}
      >
        {this.state.isEntered ? (
          <form onSubmit={onSubmit.bind(this)}>
            <input
              type="text"
              name={name}
              placeholder={name}
              value={this.state.value}
              style={{
                display: display,
                marginBlockStart: "1px",
                marginBlockEnd: "1px"
              }}
              onChange={onChange.bind(this)}
            />
          </form>
        ) : (
          <p
            onMouseOver={() => this.mouseOver()}
            onMouseOut={() => this.mouseOut()}
            onClick={() => this.onClickField()}
            style={{
              display: display,
              border: this.state.isHover ? "2px solid white" : "",
              marginBlock: this.state.isHover ? "1px" : "3px",
              margin: this.state.isHover
                ? "2px 2px 2px 2px"
                : "4px 4px 4px 4px",
              color: color
            }}
          >
            {this.state.value}
          </p>
        )}
      </div>
    );
  }
}

ClickToEnterTextField.propTypes = {
  /** Input Name. Recommend setting this to match object's property so a single change handler can be used */
  name: PropTypes.string.isRequired,

  /** Input Type */
  type: PropTypes.oneOf(["text", "number", "password"]),

  /** Mark label with asterisk if required */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Function to call onSubmit */
  onSubmit: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occues */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,

  /** Display Format */
  display: PropTypes.string,

  /** Left Margin */
  leftMargin: PropTypes.string,

  /** Top Margin */
  topMargin: PropTypes.string,

  /** Bottom Margin */
  bottomMargin: PropTypes.string,

  /** Right Margin */
  rightMargin: PropTypes.string,

  /** Text Color */
  color: PropTypes.string
};

ClickToEnterTextField.defaultProps = {
  value: "PART NAME",
  leftMargin: "5px",
  rightMargin: "10px",
  topMargin: "5px",
  bottomMargin: "5px",
  display: "inline-block"
};

export default ClickToEnterTextField;
