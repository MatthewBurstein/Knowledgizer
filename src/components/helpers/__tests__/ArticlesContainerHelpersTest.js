import { delayAndRepeat } from '../ArticlesContainerHelpers'

jest.useFakeTimers();

describe('delayAndRepeat', () => {
  let delayedFunct, delayTime;

  beforeEach(() => {
    delayedFunct = jest.fn();
    delayTime = 1000;
  })

  it('calls the callback once per second with each successive argument from delayedFunctArgs', () => {
    let delayedFunctArgs = [1, 2]
    delayAndRepeat(delayedFunct, delayedFunctArgs, delayTime);

    expect(delayedFunct).not.toBeCalled();

    jest.runTimersToTime(delayTime)
    expect(delayedFunct).toHaveBeenCalledWith(1);

    jest.runTimersToTime(delayTime)
    expect(delayedFunct).toHaveBeenLastCalledWith(2);
  });

  it('returns undefined delayedFunctArgs argument is empty', () => {
    let delayedFunctArgs = [];
    delayAndRepeat(delayedFunct, delayedFunctArgs, delayTime);

    jest.runTimersToTime(delayTime)
    expect(delayedFunct).not.toBeCalled();
  })
});
