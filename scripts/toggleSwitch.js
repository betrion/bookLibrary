import { getBooks } from "./fetchLibrary.js";
import { bookLibrary } from "./store.js";

function flipTheSwitch() {
  const viewSwitches = document.querySelectorAll(".checker");
  viewSwitches.forEach((slider) => {
    slider.addEventListener("click", (e) => {
      let currentIndex = e.target.dataset.key;
      if (bookLibrary[currentIndex].read) {
        bookLibrary[currentIndex].read = false;
      } else if (!bookLibrary[currentIndex].read) {
        bookLibrary[currentIndex].read = true;
      }
      getBooks();
    });
  });
}
export { flipTheSwitch };
