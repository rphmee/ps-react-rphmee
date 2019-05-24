import React from "react";
import PropTypes from "prop-types";
import AnimateHeight from "react-animate-height";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

class ExpandingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false, extracting: true };
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  hello = () => {
    console.log("hello world");
  };

  componentDidMount() {
    this.hello();
    this.toggleExpanded();
  }

  render() {
    const { children, startHeight, endHeight, backgroundColor } = this.props;
    return (
      <div>
        <AnimateHeight
          duration={1000}
          height={this.state.expanded ? endHeight : startHeight}
        >
          <div
            style={{
              backgroundColor: backgroundColor,
              height: this.state.expanded ? endHeight : startHeight
            }}
            onClick={this.toggleExpanded}
            onLoad={this.hello}
          >
            {this.state.expanded && children}
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
  height: PropTypes.number,

  /** Factor to Expand By */
  multiplier: PropTypes.number
};

ExpandingBar.defaultProps = {
  /** IX Extract Color */
  backgroundColor: "#445160",

  /** Height */
  height: 50,

  /** Expansion Factor */
  multiplier: 1.5
};

export default ExpandingBar;
