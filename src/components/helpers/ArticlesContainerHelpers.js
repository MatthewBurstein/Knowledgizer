const delayAndRepeat = (delayedFunct, delayedFunctArgs, shouldPrint, delayTime) => {
  if (delayedFunctArgs.length === 0) { return }
  setTimeout(() => {
    if(shouldPrint.print) {
      const currentArg = delayedFunctArgs.shift();
      delayedFunct(currentArg);
      delayAndRepeat(delayedFunct, delayedFunctArgs, shouldPrint, delayTime);
    }
  }, delayTime);
}

export { delayAndRepeat }
