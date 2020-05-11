import React from "react";
import BookActions from "../actions/bookActions";

function Pagination(props){

    let bookList = props.bookState.bookList;
    let numPerPage = props.bookState.numPerPage;
    let currentPage = props.bookState.currentPage;
    let numOfPages = Math.ceil(bookList.length / numPerPage);

    function displayPageItems(){
        let html = [];       
        for(let i = 1; i <= numOfPages; i++){         
            html.push(
                <li key={i} className={`page-item ${isActive(i)}`}>
                    <button className={`page-link `} type="button" onClick={() => BookActions.changePage(bookList, i)}>
                        {i}
                    </button>
                </li>
            );
        }
        return html;       
    }

    function isActive(num){
        if(num === currentPage){
            return "active"
        }
    }

    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" onClick={() => currentPage > 1 ? BookActions.changePage(bookList, currentPage - 1) : null } aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {displayPageItems()}
                
                <li className="page-item">
                    <button className="page-link" onClick= { () => currentPage < numOfPages ? BookActions.changePage(bookList, currentPage + 1) : null } aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )

}

export default Pagination;
