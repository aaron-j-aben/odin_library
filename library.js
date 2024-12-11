/**
 * @author Aaron J.M. Aben
 */

const myLibrary = [];
// get reference to library "shelves"

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

function addToDisplay() {
    const latestBook = myLibrary[-1];

    const bookElem = document.createElement('div');
    const bookCover = document.createElement('div');
    const title = document.createElement('p');
    const by = document.createElement('p');
    const author = document.createElement('p');
    const pgs = document.createElement('p');
    const readCBox = document.createElement('div');

    bookElem.classList.add('book');
    bookCover.classList.add('book-cover');
    title.classList.add('title');
    author.classList.add('author');
    pgs.classList.add('pages');
    readCBox.classList.add('read', 'checkbox');

    bookElem.dataset.libIndex = myLibrary.length - 1;

    title.textContent = latestBook.title;
    by.textContent = 'by';
    author.textContent = latestBook.author;
    pgs.textContent = latestBook.pages.toString();
    // make checkbox checked if book is read

    bookCover.appendChild(title);
    bookCover.appendChild(by);
    bookCover.appendChild(author);
    bookElem.appendChild(bookCover);
    bookElem.appendChild(pgs);
    bookElem.appendChild(readCBox);

    // add book to shelf
}

function removeFromDisplay() {

}

function addBookToLibrary(title, author, pages, read) {
    const entry = new Book(title, author, pages, read);
    myLibrary.push(entry);

    addToDisplay();
}

function removeBookFromLibrary() {

    removeFromDisplay();
}

/* button handling */