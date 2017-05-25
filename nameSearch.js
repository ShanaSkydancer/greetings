//Checks if the name is already in the array
function nameSearch() {
  const namesGreeted = [];
  var boo = false;
  for (var i = 0; i < namesGreeted.length; i++) {
    if (namesGreeted.length === 0) {
      boo = false;
    }
    if (namesGreeted[i] === inputName.value) {
      boo = true;
    } else {
      boo = false;
    }
  }
  return boo;
};
