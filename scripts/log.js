import { bookLibrary } from "./store.js";

export function bookLog() {
  let totalCount = document.querySelector(".booksCount");
  totalCount.innerHTML = bookLibrary.length;
  let readBooks = document.querySelector(".booksRead");
  readBooks.innerHTML = bookLibrary.filter(function (book) {
    return book.read == true;
  }).length;
  let unreadBooks = document.querySelector(".booksNotRead");
  unreadBooks.innerHTML = bookLibrary.filter(function (book) {
    return book.read == false;
  }).length;
}
