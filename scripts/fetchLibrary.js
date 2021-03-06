import { bookLibrary } from "./store.js";
import { flipTheSwitch } from "./toggleSwitch.js";
import { bookLog } from "./log.js";
import { deleteBook } from "./deleteBook.js";

const booksGrid = document.querySelector(".booksGrid");

function getBooks() {
  booksGrid.innerHTML = "";
  bookLibrary.forEach(
    (book) =>
      (booksGrid.innerHTML += `<div class="book ${
        book.read ? "readBook" : ""
      }" data-key="${bookLibrary.indexOf(book)}">
        <header>
          <h4>${book.name}</h4>
          <button class="deleteBook">
            <img src="icons/close.svg" alt="" srcset="" />
          </button>
        </header>
        <p>by ${book.artist}</p>
        <p>Released in ${book.year}</p>
        <p>Have read it?
        <label class="switch" id="s">
         <input type="checkbox" class="checker" ${
           book.read ? "checked" : ""
         } data-key="${bookLibrary.indexOf(book)}">
         <span class="slider round"></span></p>
        </label>
      </div>`)
  );
  bookLog();
  deleteBook();
  flipTheSwitch();
}

export { getBooks };
