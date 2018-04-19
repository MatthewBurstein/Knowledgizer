const delayAndRepeat = (delayedFunct, delayedFunctArgs, delayTime) => {
  if (delayedFunctArgs.length === 0) { return }
  const currentArg = delayedFunctArgs.shift();
  setTimeout(() => {
    delayedFunct(currentArg);
    if(delayedFunctArgs.length > 0) {
      delayAndRepeat(delayedFunct, delayedFunctArgs, delayTime);
    }
  }, delayTime);
}

export { delayAndRepeat }
