import React from "react";
import BookActions from "../actions/bookActions";


class BookTable extends React.Component {

    render(){
        return(
        <div>     
            <h1>Books</h1>                         
            <table className="table">                   
                <thead>
                    <tr>  
                        <th>ISBN                         
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksDesc(this.props.bookState.bookList, "isbn") }>Desc</button>
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksAsc(this.props.bookState.bookList, "isbn") }>Asc</button>                                
                        </th>                          
                        <th>Title                            
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksDesc(this.props.bookState.bookList, "title") }>Desc</button>
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksAsc(this.props.bookState.bookList, "title") }>Asc</button>
                        </th>
                        <th>Author                            
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksDesc(this.props.bookState.bookList, "author") }>Desc</button>
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksAsc(this.props.bookState.bookList, "author") }>Asc</button>
                        </th>
                        <th>Year                            
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksDesc(this.props.bookState.bookList, "year") }>Desc</button>
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksAsc(this.props.bookState.bookList, "year") }>Asc</button>
                        </th>
                    </tr>
                </thead>
                <tbody>                   
                    {this.props.bookState.bookList.map(this.createBookRow, this)}
                </tbody>    
            </table>
        </div>
        )
    }

    createBookRow(book){      

        return (
            <tr key={book.title}>
                <td>{book.isbn} </td>
                <td>{book.title} </td>
                <td>{book.author}</td>
                <td>{book.year}</td>
            </tr>
        );
    }  



}

export default BookTable;


