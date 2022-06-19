import {} from "./modal.js";
import {} from "./toggleSwitch.js";
import {} from "./fetchLibrary.js";
import { Book, bookLibrary } from "./store.js";

const submitButton = document
  .querySelector(".submitForm")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let book = new Book(
      e.target.form.bookName.value,
      e.target.form.bookArtist.value,
      e.target.form.bookYear.value,
      true ? e.target.form.haveRead.value == "on" : false
    );
    book.addBookToLibrary();
    console.log(bookLibrary);
  });

// let newbook = new Book("afdskj", "kfdjfsk", "2399", true);

// newbook.addBookToLibrary();
