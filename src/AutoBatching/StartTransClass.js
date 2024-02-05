import React, { Component, startTransition } from 'react';

class StartTransClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      list: [],
    };
  }

  handleChange = (e) => {
    const inputText = e.target.value;
    this.setState({ inputText }, () => {
      this.startListTransition(inputText);
    });
  };

  startListTransition = (inputText) => {
    startTransition(() => {
      const data = [];
      const LIST_SIZE = 5000;
      for (let i = 0; i < LIST_SIZE; i++) {
        data.push(inputText);
      }
      this.setState({ list: data });
    });
  };

  render() {
    const { inputText, list } = this.state;

    return (
      <div>
        <h1>Start transition (Class Component)</h1>
        <input type='text' value={inputText} onChange={this.handleChange}></input>
        <p>
          {list?.map((item, index) => (
            <div className='parent-div' key={index}>
              <div className='child-div'>{item}</div>
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default StartTransClass;
