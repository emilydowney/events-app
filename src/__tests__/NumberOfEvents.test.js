import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberWrapper;
  beforeAll(() => {
    NumberWrapper = shallow(<NumberOfEvents />);
  });

  test('renders the component', () => {
    expect(NumberWrapper.find('.number')).toHaveLength(1);
  });

  test('number of events is 32 by default', () => {
    expect(NumberWrapper.find('.number').prop('value')).toBe(32);
  });

});