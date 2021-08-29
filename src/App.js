import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents.js';
import { extractLocations, getEvents } from './api';

import './nprogress.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      selectedLocation: 'all',
    };

  }

  componentDidMount() {
    this.mounted = true;

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events
        : events.filter(event => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
      });
    });
  };

  changeCount = newCount => {
    const { selectedLocation } = this.state;
    this.updateEvents(selectedLocation, newCount);
  }


  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations} updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          changeCount={this.changeCount} />
        <EventList
          events={this.state.events} />
      </div>
    );
  }
}

export default App;