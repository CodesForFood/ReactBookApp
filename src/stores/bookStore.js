import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';


let bookStore = {
    bookList: [],
    currentPage: 1,
    numPerPage: 10  
}


class BookStoreClass extends EventEmitter {

    addBookListeners(changeCB){
        this.on("change", changeCB);
    }

    removeBookListeners(changeCB){
        this.removeListener("change", changeCB);
    }

    emitChange(){ this.emit("change"); }

    getBookStore() { return bookStore; }

    filterBooks(bookList, option, searchTerm){
        let filteredBooks = [];
        searchTerm = searchTerm.toLowerCase();
        switch(option){
            case "title":
                return filteredBooks = bookList.filter(book => book.title.toLowerCase().includes(searchTerm));            
            case "isbn":
                return filteredBooks = bookList.filter(book => book.isbn !== null ?  book.isbn.includes(searchTerm) : false);            
            case "author":
                return filteredBooks = bookList.filter(book => book.author.toLowerCase().includes(searchTerm));            
            case "year":
                return filteredBooks = bookList.filter(book => book.year === searchTerm);            
            default:
                return filteredBooks;
        }        
    }

    sortAsc(bookList, option){
        if(bookList.length === 0) { return bookList; }

 
        switch(option){
            case "title":
                return bookList.sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 );            
            case "isbn":   
                return  bookList.sort((a,b) => a.isbn - b.isbn);            
            case "author":
                return bookList.sort((a,b) => a.author.toLowerCase() < b.author.toLowerCase() ? -1 : 1 );            
            case "year":
                return bookList.sort((a,b) => a.year - b.year);            
            default:
            return bookList;
        }
    }

    sortDesc(bookList, option){
        if(bookList.length === 0) { return bookList; }
   
        switch(option){
            case "title":
                return bookList.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1 );            
            case "isbn":
                return bookList.sort((a,b) => b.isbn - a.isbn);            
            case "author":
                return bookList.sort((a,b) => a.author.toLowerCase() > b.author.toLowerCase() ? -1 : 1 );            
            case "year":
                return  bookList.sort((a,b) => b.year - a.year);            
            default:
            return bookList;
        }
    }
}

const BookStore = new BookStoreClass();

Dispatcher.register( (action) => {
    switch (action.actionType){
        case "all_books":       
            bookStore.bookList = action.data;            
            BookStore.emitChange();
        break;
        case "search":
            bookStore.bookList = BookStore.filterBooks(action.data, action.option, action.searchTerm);
            BookStore.emitChange();
        break;
        case "sortAsc":
            bookStore.bookList = BookStore.sortAsc(action.data, action.option);
            BookStore.emitChange();
        break;
        case "sortDesc":
            bookStore.bookList = BookStore.sortDesc(action.data, action.option);
            BookStore.emitChange();
        break;
        case "changeNumPerPage":
            bookStore.bookList = action.data;
            bookStore.numPerPage = action.numPerPage; 
            let numOfPages = Math.ceil(bookStore.bookList.length / bookStore.numPerPage);
            if(bookStore.currentPage > numOfPages){
                bookStore.currentPage = 1;
            }

            BookStore.emitChange();
        break;
        case "changePage":
            bookStore.bookList = action.data;
            bookStore.currentPage = action.page;
            BookStore.emitChange();
        break;
        default:
            return;
    }
});

export default BookStore;