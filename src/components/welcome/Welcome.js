import React from 'react';
import Toggle from '../toggle/Toggle';
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  submit() {
    alert('Button clicked!');
  }

  render() {
    return (
      <div>
        <h1 className="heading">Hello, {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.submit}>Submit</button>
        <Toggle />
      </div>
    );
  }
}

export default Welcome;
