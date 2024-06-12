document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  (function () {
    let inputValue = document.querySelector(".input-value");
    // console.log("Input Value Element:", inputValue);

    let buttons = document.querySelectorAll(".btn");
    // console.log("Buttons:", buttons);

    let allClear = document.querySelector(".btn-all-clear");
    // console.log("All Clear Button:", allClear);

    let equal = document.querySelector(".btn-equal");
    // console.log("Equal Button:", equal);

    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        inputValue.value += value;

        // console.log("Button Clicked, Value:", value);
        // console.log("Input Value:", inputValue.value);
      });
    });

    equal.addEventListener("click", (e) => {
      if (inputValue.value === "") {
        inputValue.value = "";
      } else {
        let answer = eval(inputValue.value);
        inputValue.value = answer;
      }
    });

    allClear.addEventListener("click", (e) => {
      inputValue.value = "";
    });
  })();
});
