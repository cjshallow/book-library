const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}


function toggleRead(index) {
    myLibrary[index].readStatus = !myLibrary[index].readStatus;
    displayBooks();
}

function displayBooks() {
    let libraryDisplay = document.querySelector(".book-library-cards");
    libraryDisplay.innerHTML = ""; 
    myLibrary.forEach(function(book, index) {  
            let bookCard = document.createElement('div')
            bookCard.innerHTML += `
            <div id = "card-full" data-identifier = "newBookCard">
                <div class = "card-header">
                    <h2 class = "book-title">${book.title}</h2>
                    <h3 class = "book-author">${book.author}</h3>
                </div>
                <div class = "card-body">
                    <p class = "book-pages">${book.pages}</p>
                    <p class = "book-readStatus">${book.readStatus ? "Read" : "Not Read"}</p>
                </div>
                <div class = "edit-btns"> 
                <input type="button" name="remove-button" value="Remove Book" onclick="removeBook(${index})" />
                <input type="button" name="toggle-read-button" value="Toggle Read" onclick="toggleRead(${index})" />
                </div>
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
    document.getElementById('input-form').style.display = "none";
})


function addNewBook() {
    document.getElementById('input-form').style.display = "block";
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}
