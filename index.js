// const nini = document.createElement("h1");
// nini.textContent =
//   "Welcome to your best and second year on earth wishing you Long life and more prosperity in life and a Happy Birthday ";
// document.querySelector("body").appendChild(nini);

// Function to start a countdown from a given number
function startCountdown(startNumber) {
  // Get the countdown display element
  const countdownElement = document.getElementById("countdown");

  // Set the initial number to display
  let currentNumber = startNumber;

  // Display the initial number
  countdownElement.textContent = currentNumber;

  // Create an interval that decreases the number by 1 every second
  const intervalId = setInterval(() => {
    // Decrease the current number
    currentNumber -= 1;

    // Update the displayed number
    countdownElement.textContent = currentNumber;

    // Check if the countdown has reached zero
    if (currentNumber <= 0) {
      // Clear the interval to stop the countdown
      clearInterval(intervalId);
      // Display a message when the countdown ends
      countdownElement.textContent = "Time's up!";
      countdownElement.innerText = "Happy Birthday";
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Start the countdown from 10
startCountdown(10);
