const form = document.getElementById("fillForm");
const inputName = document.querySelector("#usersName");
const button = document.querySelector("#greetButton");
const outputName = document.querySelector(".nameOutput");
const diffLang = document.getElementsByName("language");
const diffGreeting = ["Hello, ", "Goeie dag, ", "Mholweni, "];
const theCounter = document.querySelector(".countOutput");
const resetCount = document.querySelector("#resetButton");
const namesGreeted = [];

//Sets localStorage
if (localStorage.getItem === null) {
  localStorage.setItem("counter", 0);
  var count = 0;
} else {
  var count = Number(localStorage.getItem("counter"));
};

//Triggers event when submit button is pressed
form.addEventListener("submit", function() {
  event.preventDefault();
  count = localStorage.getItem("counter");
  var language = whichLanguage();
  var namesChecked = nameSearch();
  if (namesChecked === false) {
    count++;
    namesGreeted.push(inputName.value);
  }
  theCounter.innerHTML = count;
  outputName.innerHTML = language + inputName.value;
  localStorage.setItem("counter", count);
});

nameSearch();

whichValue();

whichLanguage();

counterReset();
