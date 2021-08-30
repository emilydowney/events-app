import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <Form.Control.Feedback className="alert" style={this.getStyle()}>
        {this.props.text}
      </Form.Control.Feedback>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'black';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'white';
  }
}

export { InfoAlert, ErrorAlert };