const bookLibrary = [];

class Book {
  constructor(
    name = "a Book",
    artist = "John Doe",
    year = "19xx",
    read = true,
    added = Date.now()
  ) {
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.read = read;
    this.added = added;
  }
  addBookToLibrary() {
    return bookLibrary.push(this);
  }
}

export { Book, bookLibrary };
