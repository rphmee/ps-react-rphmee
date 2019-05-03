import React from "react";
import PropTypes from "prop-types";
import IxButton from "../IxButton";
import EyeIcon from "../EyeIcon";

class IxButtonMulti extends React.Component {
  render() {
    const { children } = this.props;
    return <div>{this.props.children}</div>;
  }
}

IxButtonMulti.propTypes = {
  children: PropTypes.any
};

export default IxButtonMulti;
