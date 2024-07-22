const myLibrary = [];
const cardContainer = document.getElementById('cardContainer');


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

// placeholder entry to add books. Will add new book button that brings up form for user to enter info later

//function that loops through myLibrary and displays card
function displayCards(){
    cardContainer.replaceChildren()
    for (let book of myLibrary) {
    makeTitleCard(book);
    }
}

//generates title card to display info
function makeTitleCard (book){
    const newCard = document.createElement("div");
    const titlePara = document.createElement("p");
    const authorPara = document.createElement("p");
    const pagesPara = document.createElement("p");
    const readPara = document.createElement("p");
    const readToggle = document.createElement("input");
    const deleteBtn = document.createElement("button");

    newCard.id = myLibrary.indexOf(book);
    newCard.className = "titleCard";

    titlePara.innerHTML = `Title: ${book.title}`;  
    authorPara.innerHTML = `Author:  ${book.author}`;
    pagesPara.innerHTML = `Pages: ${book.pages}`;
    readPara.innerHTML = `Read?  ` ;
    deleteBtn.innerHTML = `Delete`

    if(book.read ? readToggle.checked = true : readToggle.checked = false);

    readToggle.addEventListener("change", () =>{
        book.read = readToggle.checked;
    });

    readToggle.type = 'checkbox';
    readToggle.name = 'read'
    readPara.appendChild(readToggle);

    deleteBtn.addEventListener("click", () =>{
        deleteCard(newCard);
    });
    
    
    cardContainer.appendChild(newCard);
    newCard.appendChild(titlePara);
    newCard.appendChild(authorPara);
    newCard.appendChild(pagesPara);
    newCard.appendChild(readPara);
    newCard.appendChild(deleteBtn);

}

function deleteCard(bookCard){
    myLibrary.splice(bookCard.id, 1);
    displayCards();
}

// placeholder entry to add books. Will add new book button that brings up form for user to enter info later
addBookToLibrary("the Hobbit", "Tolkien", 310, "read");
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "JK Rowling", 223, "false");


displayCards();