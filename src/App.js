import React, { Component } from 'react';
import WelcomeScreen from './WelcomeScreen';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents.js';
import EventGenre from './EventGenre';
import { WarningAlert } from './Alert';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Logo from './eventlogo.png';

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
      showWelcomeScreen: undefined
    };

  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events)
          });
        }
        if (!navigator.onLine) {
          this.setState({
            warningText: 'There is a error with your network connection. Events may not be up to date.'
          })
        } else {
          this.setState({
            warningText: ''
          })
        }
      });
    }
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
        numberOfEvents: eventCount
      });
    });
  };

  changeCount = newCount => {
    const { selectedLocation } = this.state;
    this.updateEvents(selectedLocation, newCount);
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    })
    return data;
  }

  render() {
    return (
      <div className="App">
        <div md="6" className="header">
          <img src={Logo} className="logo" alt="Logo"></img>
        </div>

        <WarningAlert className="warning" text={this.state.warningText} />

        <CitySearch
          locations={this.state.locations} updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents} />


        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          changeCount={this.changeCount} />

        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />

          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis
                type="category"
                dataKey="city"
                name="City" />
              <YAxis
                type="number"
                allowDecimals={false}
                dataKey="number"
                name="Number of Events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#F46A5F" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <EventList
          events={this.state.events} />

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;