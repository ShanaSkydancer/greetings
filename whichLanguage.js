//Greets you in the language you've selected via radio buttons
function whichLanguage() {
  const diffGreeting = ["Hello, ", "Goeie dag, ", "Mholweni, "];
  const diffLang = document.getElementsByName("language");
  var text = "";
  var i;
  for (i = 0; i < diffLang.length; i++) {
    if (diffLang[i].checked) {
      text = diffLang[i].value;
    }
  }
      if (text === "english") {
        return diffGreeting[0];
      } else if (text === "afrikaans") {
        return diffGreeting[1];
      } else if (text === "xhosa") {
        return diffGreeting[2];
      } else {
        return "Hello, ";
      }
};
