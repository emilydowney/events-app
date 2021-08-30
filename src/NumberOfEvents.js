import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEvents: 32
    };
  }


  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    if (value > 32) {
      this.setState({
        errorText: 'Please enter a number from 1 to 32.'
      })
    } else {
      this.setState({
        errorText: ''
      })
      this.props.changeCount(value);
    }
  };


  render() {
    return (
      <div>
        <ErrorAlert text={this.state.errorText} />
        <input
          type="number"
          className="number"
          value={this.state.numberOfEvents}
          onChange={e => this.handleChange(e)} />
      </div>
    )
  }
}

export default NumberOfEvents;