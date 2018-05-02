import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';

describe('Controls', () => {
  const mockClear = jest.fn()
  const mockStop = jest.fn()
  const mockStart = jest.fn()
  const props = { clearArticles: mockClear, stopPrinting: mockStop, startPrinting: mockStart }
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

  describe('stopPrinting button', () => {
    it('calls the stopPrinting method from props', () => {
      controls.find('#stop-printing').simulate('click')
      expect(mockStop).toHaveBeenCalled();
    })
  })

  describe('startPrinting button', () => {
    it('calls the startPrinting method from props', ()  => {
      controls.find('#start-printing').simulate('click');
      expect(mockStart).toHaveBeenCalled();
    })
  })
});
