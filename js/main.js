var results = document.querySelector("#results");
var buttons = document.querySelectorAll(".digit");
// console.log(buttons);

var values = [];

// Takes the input of each key other then equal or clear and adds it to the array
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    results.innerHTML += event.target.value;
    values.push(event.target.value);
    console.log(values);
  })
};

// When the equal key is selected, this takes the array and does the equation and returns the result
var equal = document.querySelector("#equal");
equal.addEventListener("click", function() {
  console.log(eval(values.join(" ")));
  results.innerHTML=(eval(values.join(" ")));
});

// Clears the results by clearing the values array
var clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
  values = [];
  results.innerHTML = " ";
});
