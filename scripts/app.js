import {} from "./modal.js";
import {} from "./toggleSwitch.js";
import { getBooks } from "./fetchLibrary.js";
import { Book, bookLibrary } from "./store.js";
import {} from "./deleteBook.js";

const sortButton = document
  .querySelector("#orderSelect")
  .addEventListener("input", (e) => sortBooks(e.target.value));

const submitButton = document
  .querySelector(".submitForm")
  .addEventListener("click", function (e) {
    let isFormValid = e.target.form.checkValidity();
    if (!isFormValid) {
      e.target.form.reportValidity();
    } else {
      e.preventDefault();
      let book = new Book(
        e.target.form.bookName.value,
        e.target.form.bookArtist.value,
        e.target.form.bookYear.value,
        true ? e.target.form.haveRead.checked == true : false
      );
      console.log(e.target.form.haveRead.checked);

      //clear the form and hide it
      e.target.parentNode.parentNode.parentNode.style.display = "none";

      e.target.form.bookName.value = "";
      e.target.form.bookArtist.value = "";
      e.target.form.bookYear.value = "";
      e.target.form.haveRead.checked = false;
      book.addBookToLibrary();
      getBooks();
    }
  });

function sortBooks(sortOrder) {
  if (sortOrder === "dateAdded") {
    bookLibrary.sort(function (a, b) {
      return a.added - b.added;
    });
  } else if (sortOrder === "datePublished") {
    bookLibrary.sort(function (a, b) {
      return a.year - b.year;
    });
  } else if (sortOrder === "bookName")
    // sort by name
    bookLibrary.sort(function (a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

  getBooks();
}

let exampleBook1 = new Book(
  "harry potter",
  "jk rowling",
  1991,
  true
).addBookToLibrary();
let exampleBook2 = new Book(
  "Game Of Thrones",
  "George R.R Martin",
  2001,
  false
).addBookToLibrary();
let exampleBook3 = new Book(
  "The Hobbit",
  "J.R.R Tolkien",
  1937,
  true
).addBookToLibrary();

getBooks();
