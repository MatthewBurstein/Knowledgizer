const delay = function(callbackArgs, callback, delayTime) {
  if (callbackArgs.length == 0) { return }
  let currentArg = callbackArgs.shift();
  setTimeout(() => {
    callback(currentArg);
    if(callbackArgs.length > 0) {
      delay(callbackArgs, callback, delayTime);
    }
  }, delayTime);
}

export default delay
