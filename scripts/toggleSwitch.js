let toggleSwitch = document
  .querySelector(".checker")
  .addEventListener("click", (e) => {
    e.target.parentNode.parentNode.parentNode.classList.toggle("readBook");
  });

function toggleStatus() {
  console.log("y");
}
