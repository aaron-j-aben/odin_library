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
    this.info = function() {
        const readString = read ? "read" : "not read yet";
        return `${this.title} by  ${this.author}, ${this.pages} pages, ${readString}`;
    };
}

function addBookToLibrary(title, author, pages, read) {
    const entry = new Book(title, author, pages, read);
    myLibrary.push(entry);
}