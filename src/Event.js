import React, { Component } from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';

import './Event.css';

class Event extends Component {
  state = {
    show: false
  }

  handleClick = () => {
    this.setState({
      show: true
    });
  }

  showLess = () => {
    this.setState({
      show: false
    });
  }

  render() {
    const { event } = this.props;
    const dateTime = moment(event.start.dateTime).format('MMMM Do YYYY, h:mm a');

    return (
      <Card bg="light">
        <Card.Title className="summary">{event.summary}</Card.Title>
        <Card.Subtitle className="date-time">{dateTime}</Card.Subtitle>
        <Card.Text className="location">{event.location}</Card.Text>

        {this.state.show === false && (
          <Card.Text>
            <button
              className="show details-btn"
              onClick={() => this.handleClick()}>
              Show details
            </button>
          </Card.Text>
        )}

        {this.state.show === true && (
          <Card.Text className="details">{event.description}
            <br />
            <button
              className="less btn-text"
              onClick={() => this.showLess()}>Hide details</button>
          </Card.Text>
        )}

      </Card>
    )
  }
}

export default Event;