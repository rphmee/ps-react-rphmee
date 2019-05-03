import React from "react";
import PropTypes from "prop-types";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "react-fontawesome";

const sayHello = () => {
  console.log("Hello World!");
};

class IxButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  mouseOver() {
    this.setState({ hover: true });
  }

  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    const { color, size, shadow, handleClick, shape, icon } = this.props;
    return (
      <div
        style={{
          backgroundColor: this.state.hover ? color : "transparent",
          width: size,
          height: size,
          borderRadius: shape === "circle" ? "50%" : "10%",
          border: `3px solid ${color}`,
          boxShadow:
            shadow && this.state.hover && "2px 2px 4px 0px rgba(0, 0, 0, 0.47)",
          marginLeft: 10,
          marginTop: 5,
          cursor: this.state.hover && "pointer"
        }}
        onMouseOut={() => this.mouseOut()}
        onMouseOver={() => this.mouseOver()}
        onClick={handleClick}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "auto",
            marginBottom: "auto"
          }}
        >
          <i
            className={icon}
            style={{
              color: this.state.hover ? "white" : color,
              margin: "auto 0",
              marginLeft: !this.state.hover && -1,
              float: "none"
            }}
          />
        </div>
      </div>
    );
  }
}

IxButton.propTypes = {
  /** Button Color */
  color: PropTypes.string,

  /** Width and Height */
  size: PropTypes.number,

  /** Is there a Shadow? */
  shadow: PropTypes.bool,

  /** What to do when Clicking */
  handleClick: PropTypes.func.isRequired,

  /** Shape of the Button */
  shape: PropTypes.string,

  /** Icon to Display */
  icon: PropTypes.string
};

IxButton.defaultProps = {
  /** Blue is my Favorite Color! */
  color: "#93bcff",

  /** 25px Circle */
  size: 45,

  /** Show Shadow by Default */
  shadow: true,

  /** By Default prints Hello World to Console */
  handleClick: sayHello,

  /** icon */
  icon: "fa fa-paw"
};

export default IxButton;
