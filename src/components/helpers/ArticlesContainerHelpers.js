const delayAndRepeat = (delayedFunct, delayedFunctArgs, state, delayTime) => {
  if (delayedFunctArgs.length === 0) { return }
  setTimeout(() => {
    if(state.shouldPrint) {
      const currentArg = delayedFunctArgs.shift();
      delayedFunct(currentArg);
      delayAndRepeat(delayedFunct, delayedFunctArgs, state, delayTime);
    }
  }, delayTime);
}

export { delayAndRepeat }
