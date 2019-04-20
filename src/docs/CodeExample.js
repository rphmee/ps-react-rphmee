import React from "react";
import PropTypes from "prop-types";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";

// Could easily use import Highlight from 'react-highlight';
// But, that adds 170k zipped to our bundle, b/c all langs are included
// check out prism for a better solution

class CodeExample extends React.Component {
  componentDidMount() {
    hljs.registerLanguage("javascript", javascript);
    hljs.highlightBlock(this.element);
  }

  render() {
    return (
      <pre
        ref={ref => {
          this.element = ref;
        }}
      >
        <code>{this.props.children}</code>
      </pre>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
};

export default CodeExample;
