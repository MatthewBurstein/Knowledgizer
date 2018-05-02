import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from '../Controls';

describe('Controls', () => {
  const mockClear = jest.fn()
  const mockStart = jest.fn()
  const mockStop = jest.fn()
  const props = { clearArticles: mockClear, startPrinting: mockStart, stopPrinting: mockStop }
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

  describe('stop and start printing', () => {
    let controlsWhenPrinting, controlsWhenNotPrinting;
    beforeEach(() => {
      const propsWhenPrinting = { ...props, isPrinting: true }
      controlsWhenPrinting = mount(<Controls { ...propsWhenPrinting }/>)
      const propsWhenNotPrinting = { ...props, isPrinting: false }
      controlsWhenNotPrinting = mount(<Controls { ...propsWhenNotPrinting }/>)
      mockStart.mockClear()
      mockStop.mockClear()
    })

    describe('stop button', () => {
      it('when printing, it calls the stopPrinting method from props', () => {
        controlsWhenPrinting.find('#stop-printing').simulate('click')
        expect(mockStop).toHaveBeenCalled();
      })

      it('when not printing, is disabled', () => {
        controlsWhenNotPrinting.find('#stop-printing').simulate('click')
        expect(mockStop).not.toHaveBeenCalled();
      })
    })

    describe('start button', () => {
      it('when not printing, calls the startPrinting method from props', ()  => {
        controlsWhenNotPrinting.find('#start-printing').simulate('click');
        expect(mockStart).toHaveBeenCalled();
      })

      it('when printing, is disabled', () => {
        controlsWhenPrinting.find('#start-printing').simulate('click');
        expect(mockStart).not.toHaveBeenCalled();
      })
    })
  })
});
