import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
    if (value > 32 || value < 1) {
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
      <InputGroup id="numberInput">

        <ErrorAlert text={this.state.errorText} />
        <Form.Label className="number-label">Number of Events:</Form.Label><br />
        <Form.Control
          className="number"
          type="number"
          value={this.state.numberOfEvents}
          onChange={e => this.handleChange(e)} />


      </InputGroup>
    )
  }
}

export default NumberOfEvents;