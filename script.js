const myLibrary = [];
const cardContainer = document.getElementById('cardContainer');
const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('dialog + button');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');



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

function displayCards(){
    cardContainer.replaceChildren()
    for (let book of myLibrary) {
    makeTitleCard(book);
    }
}

function deleteCard(bookCard){
    myLibrary.splice(bookCard.id, 1);
    displayCards();
}


addBtn.addEventListener("click", () =>{
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
})

document.getElementById("addForm").onsubmit = (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

   addBookToLibrary(title, author, pages, read);

   dialog.close();
   displayCards();
   document.getElementById('addForm').reset();
}


// placeholder entries
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "JK Rowling", 223, "false");
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "JK Rowling", 223, "false");
displayCards();