import React from "react";
import BookActions from "../actions/bookActions";
import Pagination from "./pagination";


class BookTable extends React.Component {
   
   
    render(){
        let bookList = this.props.bookState.bookList 
     
        return(
        <div>                       
            <h1>Books</h1>                         
            <table className="table">                   
                <thead>
                    <tr>  
                        <th>ISBN                         
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksDesc(bookList, "isbn") }>Desc</button>
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksAsc(bookList, "isbn") }>Asc</button>                                
                        </th>                          
                        <th>Title                            
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksDesc(bookList, "title") }>Desc</button>
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksAsc(bookList, "title") }>Asc</button>
                        </th>
                        <th>Author                            
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksDesc(bookList, "author") }>Desc</button>
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksAsc(bookList, "author") }>Asc</button>
                        </th>
                        <th>Year                            
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksDesc(bookList, "year") }>Desc</button>
                            <button type="button" className="float-right" onClick={() => BookActions.sortBooksAsc(bookList, "year") }>Asc</button>
                        </th>
                    </tr>
                </thead>
                <tbody>                    
                    {this.getLimitedRows()}                                 
                </tbody>    
            </table>
            <Pagination bookState={this.props.bookState} />
        </div>
        )
    }

    getLimitedRows(){ 
        let bookList = this.props.bookState.bookList       
        let currentPage = this.props.bookState.currentPage 
        let numPerPage = this.props.bookState.numPerPage 

        let startingPoint = (numPerPage * currentPage) - numPerPage;
        let endingPoint = numPerPage * currentPage;
        let content = [];

        for(let i = startingPoint; i < endingPoint; i++){
            if(i < bookList.length){
                let html = (
                    <tr key={bookList[i].title}>
                        <td>{bookList[i].isbn} </td>
                        <td>{bookList[i].title} </td>
                        <td>{bookList[i].author}</td>
                        <td>{bookList[i].year}</td>
                    </tr>
                );
                content.push(html);
            }
        }

        return content;

    }  
}

export default BookTable;


