import React, { Component } from 'react';
import Event from './Event';

import './Event.css';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="EventList">
        {events.map(event =>
          <div className="event" key={event.id}>
            <Event
              className=".event"
              event={event} />
          </div>
        )}
      </div>
    );
  }
}

export default EventList;