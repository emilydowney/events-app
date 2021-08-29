import React, { Component } from 'react';

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
    //const dateTime = moment(event.start.dateTime).format('MMMM Do YYYY, h:mm a');

    return (
      <div>
        <h1 className="summary">{event.summary}</h1>
        <h2 className="date-time">{event.start.dateTime}</h2>
        <p className="location">{event.location}</p>

        {this.state.show === false && (
          <div>
            <button
              className="show details-btn"
              onClick={() => this.handleClick()}>
              Show details
            </button>
          </div>
        )}

        {this.state.show === true && (
          <div className="details">{event.description}
            <br />
            <button
              className="less btn-text"
              onClick={() => this.showLess()}>Hide details</button>
          </div>
        )}

      </div>
    )
  }
}

export default Event;