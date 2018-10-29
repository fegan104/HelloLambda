import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      result: 'sum: '
    };
  }
  render() {
    return (
      <div className="App">
        Enter two numbers:
        <p />

        <label>
          <input value={this.state.input1} onChange={evt => this.setState({
            input1: evt.target.value
          })} />
        </label>

        <label>
          <input value={this.state.input2} onChange={evt => this.setState({
            input2: evt.target.value
          })} />
        </label>

        <button id="addButton" onClick={this.addNumbers}>Add</button>
        <div>{this.state.result}</div>
      </div>
    );
  }

  addNumbers = () => {
    console.log("clicked")
    const arg1 = this.state.input1
    const arg2 = this.state.input2
    console.log(arg1)
    console.log(arg2)

    fetch(`https://8z9nsc22ga.execute-api.us-east-2.amazonaws.com/Alpha/calculator?arg1=${arg1}&arg2=${arg2}`)
      .then(res => res.text())
      .then(sum => this.setState({ result: `sum: ${sum}` }))
      .catch(console.error)
  }
}

export default App;
