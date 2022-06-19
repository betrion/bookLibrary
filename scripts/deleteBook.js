import { getBooks } from "./fetchLibrary.js";
import { bookLibrary } from "./store.js";

function deleteBook() {
  const deleteButtons = document.querySelectorAll(".deleteBook");
  deleteButtons.forEach((botun) => {
    botun.addEventListener("click", (e) => {
      let currentIndex = e.target.parentNode.parentNode.parentNode.dataset.key;
      console.log(currentIndex);
      bookLibrary.splice(currentIndex, 1);
      getBooks();
    });
  });
}
export { deleteBook };
