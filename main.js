const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// loop that takes each item of array and displays it in an element, in a function.
// clicking add book button triggers addition

function render() {
    // loop to look through array
    // pull items from array and display them in card in new element
    // can put html within this function
}


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readStatus = document.querySelector("#read").value;
    let newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook);
    render();
}


document.querySelector("#add-book-btn").addEventListener("click", function() {
    addBookToLibrary();
})
