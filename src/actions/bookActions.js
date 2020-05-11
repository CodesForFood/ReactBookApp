import Dispatcher from '../dispatcher/appDispatcher';
import Axios from 'axios';

const URL = "https://servicepros-test-api.herokuapp.com/api/v1/books";

const BookActions = {
    getAllBooks: () =>{      
        Axios.get(URL)
        .then((resp) => {
            const bookList = resp.data;
            Dispatcher.dispatch({
                actionType: 'all_books',
                data: bookList
            });
        })
        .catch( (err) =>{
            console.log(err);
        });   
    },
    searchBooks: (option, searchTerm) => {
        Axios.get(URL)
        .then((resp) => {
            const bookList = resp.data;
            Dispatcher.dispatch({
                actionType: 'search',
                data: bookList,
                option: option,
                searchTerm: searchTerm
            });
        })
        .catch( (err) =>{
            console.log(err);
        });   
    },
    sortBooksAsc: (bookList, option) =>{
        Dispatcher.dispatch({
            actionType: "sortAsc",
            data: bookList,           
            option: option
        });
    },
    sortBooksDesc: (bookList, option) =>{
        Dispatcher.dispatch({
            actionType: "sortDesc",
            data: bookList,           
            option: option
        });
    },
    changeNumPerPage: (bookList, numPerPage) => {
        Dispatcher.dispatch({
            actionType: "changeNumPerPage",
            data: bookList,
            numPerPage: numPerPage
        });
    },
    changePage: (bookList, page) => {
        Dispatcher.dispatch({
            actionType: "changePage",
            data: bookList,
            page: page
        });
    }

}

export default BookActions;