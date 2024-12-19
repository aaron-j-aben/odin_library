/**
 * @author Aaron J.M. Aben
 */

const myLibrary = [];
const shelves = document.querySelector(".lib-display");
const addBookBtn = document.querySelector("button.add");
const addBookForm = document.querySelector("form.add-form");

const exampleRemove = document.querySelector(".example .book-interact");

/**
 * 
 * @param {string} title 
 * @param {string} author 
 * @param {number} pages 
 * @param {booleaan} read 
 */

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        const readString = this.read ? "read" : "not read yet";
        return `${this.title} by  ${this.author}, ${this.pages} pages, ${readString}`;
    }

    toggleRead() {
        this.read = !this.read;
        return this.read;
    }
}

function addToDisplay(index) {
    const latestBook = myLibrary[index];

    const bookElem = document.createElement('div');
    const bookCover = document.createElement('div');
    const title = document.createElement('p');
    const by = document.createElement('p');
    const author = document.createElement('p');
    const pgs = document.createElement('p');
    const readCBox = document.createElement('input');
    const readLabel = document.createElement('label');
    const readInfo = document.createElement('div');
    const removeBookBtn = document.createElement('button');

    bookElem.classList.add('book');
    bookCover.classList.add('book-cover');
    title.classList.add('title');
    author.classList.add('author');
    pgs.classList.add('pages');
    readCBox.classList.add('checkbox');
    readCBox.setAttribute("type", "checkbox");
    readInfo.classList.add('read');
    removeBookBtn.classList.add('book-interact');

    bookElem.dataset.libIndex = index;

    title.textContent = latestBook.title;
    by.textContent = 'by';
    author.textContent = latestBook.author;
    pgs.textContent = latestBook.pages + " pages";
    readCBox.checked = latestBook.read;
    readLabel.textContent = "Read?";
    removeBookBtn.textContent = "Remove Book";

    removeBookBtn.addEventListener("click", removeFromDisplay);
    readCBox.addEventListener("click", updateReadStatus);

    bookCover.appendChild(title);
    bookCover.appendChild(by);
    bookCover.appendChild(author);
    bookElem.appendChild(bookCover);
    bookElem.appendChild(pgs);
    readInfo.appendChild(readLabel);
    readInfo.appendChild(readCBox);
    bookElem.appendChild(readInfo);
    bookElem.appendChild(removeBookBtn);

    shelves.appendChild(bookElem);
}

function removeFromDisplay(clickEvent) {
    const bookToRemove = clickEvent.target.closest(".book");
    const libIndex = Number.parseInt(bookToRemove.dataset.libIndex);

    shelves.removeChild(bookToRemove);

    for (let i = libIndex; i < shelves.children.length; i++) {
        shelves.children[i].dataset.libIndex -= 1;
    }

    removeBookFromLibrary(libIndex);
}

function addBookToLibrary(title, author, pages, read) {
    const entry = new Book(title, author, pages, read);
    myLibrary.push(entry);

    addToDisplay(myLibrary.length - 1);
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
}

/* Update Read status for books */
function updateReadStatus(clickEvent) {
    const bookToUpdate = clickEvent.target.closest('.book');
    const libIndex = Number.parseInt(bookToUpdate.dataset.libIndex);

    myLibrary[libIndex].toggleRead();
}

/* button handling */
addBookBtn.addEventListener("click", (e) => {
    addBookForm.classList.toggle("dropdown");
});

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = addBookForm.elements.title.value;
    const author = addBookForm.elements.author.value;
    const pages = addBookForm.elements.pages.value;
    const read = addBookForm.elements.read.checked;

    addBookToLibrary(title, author, pages, read);
    addBookForm.reset();
});

exampleRemove.addEventListener("click", removeFromDisplay);