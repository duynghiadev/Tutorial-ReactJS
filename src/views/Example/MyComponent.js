import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "kunhi",
    channel: "Nghia Basil",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnchangeChannel = (event) => {
    this.setState({
      channel: event.target.value,
    });
  };

  handleClickButton = (event) => {
    alert("Click Success");
  };

  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <div className="first">
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
          My name is {this.state.name}
        </div>
        <div className="second">
          <input
            type="text"
            value={this.state.channel}
            onChange={(event) => this.handleOnchangeChannel(event)}
          />
          My channel is {this.state.channel}
        </div>
        <div className="three">
          <button onClick={(event) => this.handleClickButton(event)}>
            click me
          </button>
        </div>
      </>
    );
  }
}
export default MyComponent;
