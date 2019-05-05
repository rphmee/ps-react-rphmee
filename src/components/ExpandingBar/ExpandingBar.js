import React from "react";
import PropTypes from "prop-types";
import AnimateHeight from "react-animate-height";

class ExpandingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentHeight: props.height };
  }

  toggleHeight = () => {
    this.setState({
      currentHeight:
        this.state.currentHeight === this.props.height
          ? "auto"
          : this.props.height
    });
  };

  render() {
    const { currentHeight } = this.state;
    const { children, height, backgroundColor } = this.props;
    return (
      <div>
        <button onClick={this.toggleHeight}>
          {currentHeight === height ? "Open" : "Close"}
        </button>
        <AnimateHeight duration={250} height={currentHeight}>
          <div
            style={{
              backgroundColor: backgroundColor,
              width: "100%",
              height: "auto"
            }}
          >
            {children}
          </div>
        </AnimateHeight>
      </div>
    );
  }
}

ExpandingBar.propTypes = {
  /** Background Color */
  backgroundColor: PropTypes.string,

  /** Bar Height */
  height: PropTypes.number
};

ExpandingBar.defaultProps = {
  /** IX Extract Color */
  backgroundColor: "#445160",

  /** Height */
  height: 50
};

export default ExpandingBar;
