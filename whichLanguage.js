//Greets you in the language you've selected via radio buttons
function whichLanguage(selectedLang) {
  var diffGreeting = ["Hello, ", "Goeie dag, ", "Mholweni, "];
    if (selectedLang === "english") {
      return diffGreeting[0];
    }
    else if (selectedLang === "afrikaans") {
      return diffGreeting[1];
    }
    else if (selectedLang === "xhosa") {
      return diffGreeting[2];
    } else {
      return "Heya, ";
    };
};
