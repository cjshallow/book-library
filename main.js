const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function displayBooks() {
    myLibrary.forEach(function(book) {
        let libraryDisplay = document.querySelector(".book-library-cards")
        libraryDisplay.innerHTML = "";    
            let bookCard = document.createElement('div')
            bookCard.innerHTML = `
            ${book.title}
            ${book.author}
            ${book.pages}
            ${book.readStatus ? "Read" : "Not Read"}
            `
        libraryDisplay.appendChild(bookCard);
    })
} 


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readStatus = document.querySelector("#read").value;
    let newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook);
    displayBooks();
}


document.querySelector("#add-book-btn").addEventListener("click", function() {
    addBookToLibrary();
})
