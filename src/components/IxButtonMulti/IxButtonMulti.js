import React from "react";
import PropTypes from "prop-types";
import IxButton from "../IxButton";

class IxButtonMulti extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  // The button defined here will handle the opening/closing of the dropdown.
  // The buttons within the dropdown will be defined in the example.
  render() {
    const { children, shape, backgroundColor } = this.props;
    return (
      <div style={{ zIndex: this.state.open ? 100 : 10, position: "relative" }}>
        <IxButton
          shape={shape}
          backgroundColor={backgroundColor}
          handleClick={this.onClick.bind(this)}
        />
        <div style={{ position: "absolute" }}>
          {this.state.open && children}
        </div>
      </div>
    );
  }
}

IxButtonMulti.propTypes = {
  /** The Buttons that Exist in the Dropdown Menu */
  children: PropTypes.any,

  /** The Shape of the Main Button */
  shape: PropTypes.string
};

IxButtonMulti.defaultProps = {
  shape: "square"
};

export default IxButtonMulti;
