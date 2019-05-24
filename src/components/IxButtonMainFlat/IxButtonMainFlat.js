import React from "react";
import PropTypes from "prop-types";

const handleClick = () => {
  console.log("Hello World");
};

class IxButtonMainFlat extends React.Component {
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

  getTypeStyle(type) {
    switch (type) {
      case "small":
        return {
          lineHeight: "25px",
          height: 25,
          width: 100,
          borderRadius: "5px 5px 5px 5px",
          fontSize: 10
        };
      case "medium":
        return {
          height: 35,
          width: 150,
          lineHeight: "35px",
          borderRadius: "7px 7px 7px 7px",
          fontSize: 12
        };
      case "big":
        return {
          lineHeight: "45px",
          height: 45,
          width: 200,
          borderRadius: "10px 10px 10px 10px",
          fontSize: 14
        };
      default:
        return {
          lineHeight: "35px",
          height: 35,
          width: 150,
          borderRadius: "7px 7px 7px 7px",
          fontSize: 12
        };
    }
  }

  getIconSize(type) {
    switch (type) {
      case "small":
        return 12;
      case "medium":
        return 16;
      case "big":
        return 20;
      default:
        return 16;
    }
  }

  render() {
    const {
      type,
      backgroundColor,
      textColor,
      handleClick,
      label,
      icon
    } = this.props;
    return (
      <div
        style={{
          ...this.getTypeStyle(type),
          backgroundColor: backgroundColor,
          boxShadow: this.state.hover && "2px 2px 4px 0px rgba(0, 0, 0, 0.47)",
          cursor: this.state.hover && "pointer",
          margin: "5px 5px 5px 5px"
        }}
        onMouseOut={() => this.mouseOut()}
        onMouseOver={() => this.mouseOver()}
        onClick={handleClick}
      >
        <i
          className={icon}
          style={{
            color: textColor,
            position: "absolute",
            marginLeft: "0.5em",
            marginTop: "0.5em",
            fontSize: this.getIconSize(type)
          }}
        />
        <div
          style={{
            display: "inline-block",
            marginLeft: "50%",
            WebkitTransform: "translateX(-50%)"
          }}
        >
          <span
            style={{
              color: textColor,
              fontWeight: "bold"
            }}
          >
            {label}
          </span>
        </div>
      </div>
    );
  }
}

IxButtonMainFlat.propTypes = {
  /* small, medium, or big */
  type: PropTypes.string,

  /* background color of the button */
  backgroundColor: PropTypes.string,

  /* text and icon color of the button */
  textColor: PropTypes.string,

  /* button text */
  label: PropTypes.string,

  /* icon to be used */
  icon: PropTypes.string,

  /* function when clicked */
  handleClick: PropTypes.func
};

IxButtonMainFlat.defaultProps = {
  /* normal size */
  type: "normal",

  /* blue color */
  backgroundColor: "#0d47a1",

  /* white text */
  textColor: "white",

  /* sample label */
  label: "EXAMPLE",

  /* paw icon placeholder */
  icon: "fa fa-paw",

  /* uses the same onClick function that prints Hello World to console */
  handleClick: handleClick
};

export default IxButtonMainFlat;
