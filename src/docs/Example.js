// displays examples of components in action

import React from "react";
import PropTypes from "prop-types";
import CodeExample from "./CodeExample";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  // Don't need to do an explicit bind
  // Doesn't change the value of 'this'
  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { showCode: !prevState.showCode };
    });
  };

  render() {
    const { showCode } = this.state;
    const { code, description, name } = this.props.example;

    // Must use CommonJS require to dynamically require because
    // ES Modules must be statically analyzable
    // Dynamically requiring the Example component
    // Don't need to add imports for every Component type we create
    const ExampleComponent = require(`./examples/${
      this.props.componentName
    }/${name}`).default;
    return (
      <div className="example">
        {description && <h4>{description}</h4>}

        <ExampleComponent />

        <p>
          <a href="#" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>

        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    );
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;
