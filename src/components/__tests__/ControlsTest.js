import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';

describe('Controls', () => {
  const controls = shallow(<Controls />);

  it('renders correctly', () => {
    expect(controls).toMatchSnapshot();
  });
});
