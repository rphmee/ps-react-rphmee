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
    const { height, name, onSubmit, onChange, leftMargin, topMargin, rightMargin, bottomMargin, display, color } = this.props;
    return (
      <div style={{ height: 'auto', display: display, marginLeft: leftMargin, marginRight: rightMargin, marginTop: topMargin, marginBottom: bottomMargin }}>
        {this.state.isEntered ? (
          <form onSubmit={onSubmit.bind(this)}>
            <input
              type="text"
              name={name}
              placeholder={name}
              value={this.state.value}
              style={{display: display}}
              onChange={onChange.bind(this)}
            />
          </form>
        ) : (
          <h1
            onMouseOver={() => this.mouseOver()}
            onMouseOut={() => this.mouseOut()}
            onClick={() => this.onClickField()}
            style={{ display: display, border: this.state.isHover ? "2px solid white" : "", color: color }}
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
  leftMargin: PropTypes.number,

  /** Top Margin */
  topMargin: PropTypes.number,

  /** Bottom Margin */
  bottomMargin: PropTypes.number,

  /** Right Margin */
  rightMargin: PropTypes.number,

  /** Text Color */
  color: PropTypes.string
};

ClickToEnterTextField.defaultProps = {
  value: "PART NAME"
};

export default ClickToEnterTextField;
