import { delayAndRepeat } from '../ArticlesContainerHelpers'

jest.useFakeTimers();

describe('delayAndRepeat', () => {
  let delayedFunct, delayTime, shouldPrint, delayedFunctArgs;

  beforeEach(() => {
    delayedFunct = jest.fn();
    delayTime = 1000;
    delayedFunctArgs = ["firstArg", "secondArg"];
    shouldPrint = { print: true };
  })

  it('calls the callback once per second with each successive argument from delayedFunctArgs', () => {
    delayAndRepeat(delayedFunct, delayedFunctArgs, shouldPrint, delayTime);

    expect(delayedFunct).not.toBeCalled();

    jest.runTimersToTime(delayTime)
    expect(delayedFunct).toHaveBeenCalledWith('firstArg');

    jest.runTimersToTime(delayTime)
    expect(delayedFunct).toHaveBeenLastCalledWith('secondArg');
  });

  it('stops calling the callback when state.shouldPrint === false', () => {
    delayAndRepeat(delayedFunct, delayedFunctArgs, shouldPrint, delayTime);
    expect(delayedFunct).not.toBeCalled();

    jest.runTimersToTime(delayTime)
    expect(delayedFunct).toHaveBeenCalledWith('firstArg');

    shouldPrint.print = false;

    jest.runTimersToTime(delayTime)
    expect(delayedFunct).not.toHaveBeenLastCalledWith('secondArg');
  })

  it('does not call the callback if delayedFunctArgs is empty', () => {
    delayedFunctArgs = [];
    delayAndRepeat(delayedFunct, delayedFunctArgs, shouldPrint, delayTime);

    jest.runTimersToTime(delayTime)
    expect(delayedFunct).not.toBeCalled();
  })
});
