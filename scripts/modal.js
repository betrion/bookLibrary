// Get the modal
var modal = document.getElementById("addBooks");

// Get the button that opens the modal
var btn = document.querySelector(".add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  console.log("hey");
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};