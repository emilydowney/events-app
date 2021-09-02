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
    this.color = 'white';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#ec426b';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#f46A5f';
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };