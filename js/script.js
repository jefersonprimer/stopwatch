let secunds = 0;
let minutes = 0;
let hours = 0;
let interval;

function lessOfTeen(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function startBtn() {
  counter();
  interval = setInterval(counter, 1000);
}

function stopBtn() {
  clearInterval(interval);
}

function resetBtn() {
  clearInterval(interval);
  secunds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerText = "00:00:00";
}

function counter() {
  secunds++;
  if (secunds == 60) {
    minutes++;
    secunds = 0;
    if (minutes == 60) {
      hours++;
      minutes = 0;
      secunds = 0;
    }
  }
  document.getElementById("timer").innerText =
    lessOfTeen(hours) + ":" + lessOfTeen(minutes) + ":" + lessOfTeen(secunds);
}
