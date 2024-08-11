function startCountdown(startNumber) {
  const countdownElement = document.getElementById("countdown");
  let currentNumber = startNumber;

  countdownElement.textContent = currentNumber;

  const intervalId = setInterval(() => {
    currentNumber -= 1;
    countdownElement.textContent = currentNumber;
    countdownElement.style.fontSize = "100px";

    if (currentNumber <= 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "Time's up!";
      countdownElement.style.color = "#ff6b6b"; // Change color when time's up
    }
  }, 500);
}

startCountdown(15);
