import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "abcJob1",
        title: "Developers",
        salary: "500",
      },
      {
        id: "abcJob2",
        title: "Testers",
        salary: "400",
      },
      {
        id: "abcJob3",
        title: "Project Managers",
        salary: "1000",
      },
    ],
  };

  render() {
    return (
      <>
        <AddComponent />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}
export default MyComponent;
