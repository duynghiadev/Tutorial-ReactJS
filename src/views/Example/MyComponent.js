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

  handleClickButton = (event) => {
    console.log("hit the button");
    alert("Click Success");
  };

  render() {
    return (
      <>
        <div className="Header first">
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
          My name is {this.state.name}
        </div>
        <div className="Header second">
          <h4>Hello MyComponent {this.state.channel}</h4>
        </div>
        <div className="Header three">
          <button onClick={(event) => this.handleClickButton(event)}>
            click me
          </button>
        </div>
      </>
    );
  }
}
export default MyComponent;
