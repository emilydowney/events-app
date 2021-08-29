import React from 'react';
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from "../mock-data";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let EventListWrapper;
  let EventWrapper;
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user hasn\'t selected an event', () => {

    });
    when('the user loads the page', () => {
      AppWrapper = mount(<App />);
    });

    then('the event element is collapsed by default.', () => {
      expect(AppWrapper.find('.details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user clicks the element', () => {
      EventWrapper.find('button').at(0).simulate('click');
    });

    then('the event element will expand to show its details', () => {
      expect(EventWrapper.find('.details')).toHaveLength(mockData.length);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('the event element is expanded', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find('button').at(0).simulate('click');
      EventWrapper.find('.details');
    });

    when('the user clicks the element', () => {
      EventWrapper.find('button').at(0).simulate('click');
    });

    then('the event element will collapse to hide its details.', () => {
      expect(EventWrapper.find('.details')).toHaveLength(0);
    });
  });
});