const timerInput = process.argv.slice(2);

const convertInput = function(input) {
  if (input.length === 0) {
    console.log("No input");
    return;
  }

  const timers = [];
  for (let i = 0; i < input.length; i++) {
    const number = Number(input[i]);
    if (!isNaN(number)) {
      timers.push(number);
    }
  }
  return timers;
};

const setTimer = function(timerInput) {
  const timers = convertInput(timerInput);
  if (!timers) {
    return;
  }

  for (const timer of timers) {
    if (timer >= 0) {
      setTimeout(() => {
        console.log(`Timer: ${timer} seconds`);
        process.stdout.write("\x07");
      }, timer * 1000);
    }
  }
};

setTimer(timerInput);