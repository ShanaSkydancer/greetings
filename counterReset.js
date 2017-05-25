//Resets our localStorage counter to 0
function counterReset() {
  // event.preventDefault();
  localStorage.setItem("counter", 0);
  var count = 0;
  document.querySelector(".countOutput").innerHTML = count;
};
