function whichValue(radioButtons) {
  var selectedLang = "";
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedLang = radioButtons[i].value;
      }
    }
  return selectedLang;
};
