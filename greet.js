const form = document.getElementById("fillForm");
const inputName = document.querySelector("#usersName");
const button = document.querySelector("#greetButton");
var outputName = document.querySelector(".nameOutput");
var diffLang = document.getElementsByName("language");
var diffGreeting= ["Hello, ", "Goeie dag, ", "Mholweni, "];
var theCounter = document.querySelector(".countOutput");
var resetCount = document.querySelector("#resetButton");
var namesGreeted = [];

if (localStorage.getItem === null) {
  localStorage.setItem ("counter", 0);
  var count = 0;
} else {
  var count = Number(localStorage.getItem("counter"));
}

form.addEventListener("submit", function() {
  event.preventDefault();
  count = localStorage.getItem("counter");
  var language = greetingFunc();
  var namesChecked = nameSearch();
  if (namesChecked === false) {
    count++;
    namesGreeted.push(inputName.value);
    console.log("Boo! 5");
  }
    console.log(namesGreeted);
  theCounter.innerHTML = count;
  outputName.innerHTML = language + inputName.value;
  localStorage.setItem("counter", count);
});


function nameSearch() {
  var boo = false;
  for (var i = 0; i < namesGreeted.length; i++){
    if (namesGreeted.length === 0) {
      boo = false;
      console.log("Boo! 1");
    }
    if (namesGreeted[i] === inputName.value) {
      boo = true;
      console.log("Boo! 2");
  } else {
      boo = false;
      console.log("Boo! 3");
  }
}
  console.log("Boo! 4");
  return boo;

}

  function greetingFunc() {
    var text = "";
    var i;
    for (i = 0; i < diffLang.length; i++) {
        if (diffLang[i].checked) {
            text = diffLang[i].value;
        }
    }

    if (text === "english") {
      return diffGreeting[0];
    }
    else if (text === "afrikaans") {
      return diffGreeting[1];
    }
    else if (text === "xhosa") {
      return diffGreeting[2];
    }
    else {
     return " ";
    }
}

function resetPageCount() {
    event.preventDefault();
    localStorage.setItem ("counter", 0);
    var count = 0;
    document.querySelector(".countOutput").innerHTML = count;
};
