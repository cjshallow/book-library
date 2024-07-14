const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function displayBooks() {
    let libraryDisplay = document.querySelector(".book-library-cards");
    libraryDisplay.innerHTML = ""; 
    myLibrary.forEach(function(book) {   
            let bookCard = document.createElement('div')
            bookCard.innerHTML += `
            <div class = "card-header">
                <h2 class = "book-title">${book.title}</h2>
                <h3 class = "book-author">${book.author}</h3>
            </div>
            <div class = "card-body">
                <p class = "book-pages">${book.pages}</p>
                <p class = "book-readStatus">${book.readStatus ? "Read" : "Not Read"}</p>
            </div>
            `
        libraryDisplay.appendChild(bookCard);
    })
} 


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readStatus = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook);
    displayBooks();
}


document.querySelector("#add-book-btn").addEventListener("click", function() {
    addBookToLibrary();
})


function addNewBook() {
    document.getElementById('input-form').style.display = "block";
}