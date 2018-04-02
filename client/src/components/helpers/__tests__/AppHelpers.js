import delay from '../AppHelpers'

jest.useFakeTimers();

describe('delay', () => {
  it('calls the callback once per second with the first argument', () => {
    let total = 0
    let callbackArgs = [1, 2, 3]
    let callback = jest.fn(arg => { return total += arg });
    let delayTime = 1000;

    delay(callbackArgs, callback, delayTime);
    expect(callback).not.toBeCalled();
    console.log(jest)
    jest.advanceTimersByTime(1000)

    expect(callback).toHaveBeenCalledwith(1);
  });
});
