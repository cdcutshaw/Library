const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(this.title + ' by ' + this.author + ' , ' + this.pages + ' pages, ' + this.read)
    };
}


function addBookToLibrary (title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}


addBookToLibrary("the Hobbit", "Tolkien", 310, "read");
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "JK Rowling", 223, "read")