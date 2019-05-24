import React from "react";
import PropTypes from "prop-types";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "react-fontawesome";
import Ellipses from "../Ellipses";

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
    const {
      color,
      backgroundColor,
      iconHoverColor,
      size,
      shadow,
      handleClick,
      shape,
      icon,
      dropdown
    } = this.props;
    return (
      <div id="button box">
        <div
          style={{
            backgroundColor: this.state.hover ? color : backgroundColor,
            width: size,
            height: size,
            borderRadius: shape === "circle" ? "50%" : "10%",
            border: `3px solid ${color}`,
            display: "inline-block",
            boxShadow:
              shadow &&
              this.state.hover &&
              "2px 2px 4px 0px rgba(0, 0, 0, 0.47)",
            margin: "5px 5px 5px 5px",
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
              height: "100%",
              width: "100%"
            }}
          >
            <i
              className={icon}
              style={{
                color: this.state.hover ? iconHoverColor : color,
                margin: "auto auto",
                float: "none"
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "inline-block",
            margin: `0px 0px ${shape === "circle" ? "-4px" : "5px"} -5px`
          }}
        >
          {dropdown && (
            <Ellipses style={{ position: "absolute" }} direction="column" />
          )}
        </div>
      </div>
    );
  }
}

IxButton.propTypes = {
  /** Button Color */
  color: PropTypes.string,

  /** Button Background Color */
  backgroundColor: PropTypes.string,

  /** Icon Hover Color */
  iconHoverColor: PropTypes.string,

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
  color: "#0d47a1",

  /** Transparent by default */
  backgroundColor: "transparent",

  /** Icon White on Hover by Default */
  iconHoverColor: "white",

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
