// Attach an event listener to execute the code when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  let inputValue = document.querySelector(".input-value");
  let buttons = document.querySelectorAll(".btn");
  let allClear = document.querySelector(".btn-all-clear");
  let deleteInput = document.querySelector(".btn-delete");
  let equal = document.querySelector(".btn-equal");

  // Add event listeners to all buttons to handle click events
  buttons.forEach(function (button) {
    // For each button, add a click event listener to handle the click event
    button.addEventListener("click", function (e) {
      // Get the value associated with the clicked button from its "data-num" attribute
      let value = e.target.dataset.num;

      // Check if the length of the inputValue exceeds the maxLength before appending a new character
      if (inputValue) {
        // Append the value of the clicked button to the inputValue
        inputValue.value += value;
      }
    });
  });

  // Add event listener to the equal button to handle click events
  equal.addEventListener("click", (e) => {
    // Check if the inputValue is empty before evaluating
    if (inputValue.value === "") {
      // Clear the inputValue if it's empty
      inputValue.value = "";
    } else {
      // Evaluate the expression in the inputValue using eval() and store the result in answer
      let answer = eval(inputValue.value);
      // Update the inputValue with the evaluated result
      inputValue.value = answer;
    }
  });

  // Add event listener to the allClear button to handle click events
  allClear.addEventListener("click", (e) => {
    // Clear the inputValue when the allClear button is clicked
    inputValue.value = "";
  });

  // Add event listener to the deleteInput button to handle click events
  deleteInput.addEventListener("click", (e) => {
    // Remove the last character from the inputValue using the slice() method
    inputValue.value = inputValue.value.slice(0, -1); // Remove last character
  });
})();
