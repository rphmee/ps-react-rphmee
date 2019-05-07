import React from "react";

class ForTesting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tog: false };
  }

  onClick() {
    this.setState({ tog: !this.state.tog });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>TOGGLE</button>
        {this.state.tog ? <h1>FOUND ME!</h1> : <></>}
      </div>
    );
  }
}

export default ForTesting;
