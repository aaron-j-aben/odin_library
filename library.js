/**
 * @author Aaron J.M. Aben
 */

const myLibrary = [];

/**
 * 
 * @param {string} title 
 * @param {string} author 
 * @param {number} pages 
 * @param {booleaan} read 
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    const readString = this.read ? "read" : "not read yet";
    return `${this.title} by  ${this.author}, ${this.pages} pages, ${readString}`;
};

function displayBooks() {
    for (book of myLibrary) {
        /*
        construct book object
        1. 
        */
    }
}

function addBookToLibrary(title, author, pages, read) {
    const entry = new Book(title, author, pages, read);
    myLibrary.push(entry);

    displayBooks();
}

/* button handling */