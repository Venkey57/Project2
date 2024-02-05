import React, { Component } from "react";
import Program3 from "./Program3";

class ProgramClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
      subject: "Javascript",
    };
  }

  changeName() {
    this.setState({ subject: "python" });
  }
  changecount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let { company } = this.props;

    return (
      <>
        <h3>class component</h3>
        <p>
          here we use conut value is {this.state.count} and subject is{" "}
          {this.state.subject}
        </p>
        <h3>
          This userInter is developed by {this.props.team} team from {company}{" "}
          company
        </h3>

        <button onClick={() => this.changeName()}>changeName</button>
        {/* <Program3 changeName={this.changeName} changeCount={this.changecount} /> */}
      </>
    );
  }
}

export default ProgramClass;
