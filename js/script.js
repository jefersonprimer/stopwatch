let secunds = 0;
let minutes = 0;
let interval;

function startBtn() {
  interval = setInterval(counter, 1000);
}

function stopBtn() {
  clearInterval(interval);
}

function resetBtn() {
  clearInterval(interval);
  secunds = 0;
  minutes = 0;
  document.getElementById("timer").innerText = "00:00";
}

function counter() {
  secunds++;
  if (secunds == 60) {
    minutes++;
    secunds = 0;
  }
  document.getElementById("timer").innerText = minutes + ":" + secunds;
}
