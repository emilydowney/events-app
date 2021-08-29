import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('renders Event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('renders Event date and time', () => {
    expect(EventWrapper.find('.date-time')).toHaveLength(1);
  });

  test('renders Event location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('renders details button', () => {
    expect(EventWrapper.find('button')).toHaveLength(1);
  });

  test('details hidden on default', () => {
    EventWrapper.setState({
      show: false
    })

    expect(EventWrapper.find('.details')).toHaveLength(0);
  })

  test('shows details upon click', () => {
    EventWrapper.setState({
      show: false
    })

    EventWrapper.find('button').simulate('click');
    expect(EventWrapper.find('.details')).toHaveLength(1);
  })

  test('shows less after clicking Show Less button', () => {
    EventWrapper.setState({
      show: true
    })

    EventWrapper.find('.less').simulate('click');
    expect(EventWrapper.find('.details')).toHaveLength(0);
  })

});