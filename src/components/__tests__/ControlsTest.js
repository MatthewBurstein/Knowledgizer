import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';

describe('Controls', () => {
  const mockClear = jest.fn()
  const props = { clearArticles: mockClear }
  const controls = shallow(<Controls { ...props } />);

  it('renders correctly', () => {
    expect(controls).toMatchSnapshot();
  });

  describe('clearScreen button', () => {
    it('calls the clearScreen method from props', () => {
      controls.find('#clear').simulate('click')

      expect(mockClear).toHaveBeenCalled()
    })
  })
});
