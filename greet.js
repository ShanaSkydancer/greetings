const form = document.getElementById("fillForm");
const inputName = document.querySelector("#usersName");
const button = document.querySelector("#greetButton");
var outputName = document.querySelector(".nameOutput");
var diffLang = document.getElementsByName("language");
var diffGreeting= ["Hello, ", "Goeie dag, ", "Mholweni, "];
var theCounter = document.querySelector(".countOutput");

form.addEventListener("submit", function() {
  event.preventDefault();
  var language = greetingFunc();
  // count++;
  // var num = parseInt();
  theCounter.innerHTML = count
  outputName.innerHTML = language + inputName.value
})

function pageReload(){
  if (localStorage.getItem === null) {
    localStorage.setItem ("counter", 0)
    counter++;
  }
  else {
    var count = localStorage.getItem("counter")
  }
}

// var nameCounter = parseInt(localStorage.getItem("counter"));
//   if (nameCounter === null) {
//       nameCounter = 0;
//   } else {
//      nameCounter++;
//      localStorage.setItem(".countOutput", nameCounter);
//  }
//
//  function pageReload(){
//    if (location.reload()) {
//      counter++;
//      var x = document.getElementId("countOutput");
//      x.innerHTML = counter;
//      document.write(counter++);
//    }
//  }

// function supportsLocalStorage() {
//   try {
//     return 'localStorage' in window && window['localStorage'] === 0;
//   } catch(event) {
//     return false;
//   }
// }
//
// window.onload = function() {
//   if (supportsLocalStorage());
//   var form = document.getElementById("fillForm");
//   var inputName = document.getElementById("usersName");
// }

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
