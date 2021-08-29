import React from 'react';
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let EventListWrapper;
  let NumberOfEventsWrapper;

  test('When user hasn\'t specified a number, 32 is the default number.', ({ given, when, then }) => {
    given('the user hasn\'t specified a number', () => {

    });

    when('the user loads the page', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = mount(<NumberOfEvents />)
    });

    then('page will load the default number of events.', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    given('the user inputs a specific number', () => {
      AppWrapper = mount(<App />);
      const numberOfEvents = { target: { value: 2 } };
      AppWrapper.find('.number').simulate('change', numberOfEvents);
    });

    when('the events load', () => {
    });

    then('the page will contain the number of events the user wants to see.', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ numberOfEvents: 2 });
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
    });
  });
});