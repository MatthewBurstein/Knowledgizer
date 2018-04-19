import React from 'react';
import { shallow } from 'enzyme';
import ControlsContainer from '../ControlsContainer';

describe('ControlsContainer', () => {
  const controlsContainer = shallow(<ControlsContainer />);

  it('renders correctly', () => {
    expect(controlsContainer).toMatchSnapshot();
  });
});
