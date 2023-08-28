import book1 from '../JSONs/book1.json' assert {type: 'json'};
import book2 from '../JSONs/book2.json' assert {type: 'json'};
import book3 from '../JSONs/book3.json' assert {type: 'json'};

var library = {
    books: [
        book1,
        book2,
        book3
    ],

    searchFirstOrDefault(bookName){
        return this.books.find((book) => {
            return book.name == bookName;
        });
    },

    sortByYearAsc(){
        this.books.sort((book1, book2) => {
            return book1.year - book2.year;
        });
    },

    sortByYearDesc(){
        this.books.sort((book1, book2) => {
            return book2.year - book1.year;
        });
    },

    printBook(bookName){
        let book = this.searchFirstOrDefault(bookName);
        let element = document.createElement('div');
        element.className = 'book-info';
        if(book != undefined){
            element.innerHTML = `
            <h3>Название книги: ${book.name}</h3>
            <p>Год публикации: ${book.year}</p>
            <p>Описание: ${book.description}</p>
            `;
        }
        if(book == undefined){
            console.log('aaaaaaaaaaaaaaaaaa');
            element.innerHTML = `
            <p>Книга ${bookName} не найдена</p>
            `;
        }
        document.body.appendChild(element);
    }
};

library.sortByYearDesc();
console.log(library.books);
library.printBook('book1');
library.printBook('book2');
library.printBook('book3');
library.printBook('book5');