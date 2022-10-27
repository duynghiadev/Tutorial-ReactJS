import React, { Component } from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/logoChannel.jpg";

class Home extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  render() {
    console.log(">>> check props: ", this.props);
    return (
      <>
        <div>Hello Home from HomePage with Duy Nghia</div>
        <div>
          <img src={logo} alt="avatar" />
        </div>
      </>
    );
  }
}

export default Color(Home);
