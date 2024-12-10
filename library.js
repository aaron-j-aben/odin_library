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

/**
 * 
 * @param {number} delta 
 */
function updateLibraryDisplay(delta) {
    const latestBook = myLibrary[-1];
}

function addBookToLibrary(title, author, pages, read) {
    const entry = new Book(title, author, pages, read);
    myLibrary.push(entry);

    updateLibraryDisplay(1);
}

function removeBookFromLibrary() {

    updateLibraryDisplay(-1);
}

/* button handling */