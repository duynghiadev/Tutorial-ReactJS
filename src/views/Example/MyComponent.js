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

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}
export default MyComponent;
