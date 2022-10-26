import React, { Component } from "react";
import { withRouter } from "react-router";

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }

  render() {
    console.log(">>> check props: ", this.props);
    return <div>Hello Home from HomePage with Duy Nghia</div>;
  }
}

export default withRouter(Home);
