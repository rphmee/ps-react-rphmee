import React from "react";
import PropTypes from "prop-types";

class Ellipses extends React.Component {
  render() {
    const { color, size, direction } = this.props;

    const dotStyle = {
      margin: "2px 2px 2px 2px",
      height: size,
      width: size,
      backgroundColor: color,
      borderRadius: "50%"
    };

    return (
      <div style={{ display: "flex", flexDirection: direction, float: "left" }}>
        <div style={dotStyle} />
        <div style={dotStyle} />
        <div style={dotStyle} />
      </div>
    );
  }
}

Ellipses.propTypes = {
  /* Color of the Dots */
  color: PropTypes.string,

  /* Size of the Dots */
  size: PropTypes.number,

  /* Direction of the Dots, Row or Column */
  direction: PropTypes.string
};

Ellipses.defaultProps = {
  /* Color of the Dots */
  color: "#0d47a1",

  /* Diameter of the Dots */
  size: 3,

  /* Row or Column */
  direction: "row"
};

export default Ellipses;
