import React from 'react';
import BookActions from "../actions/bookActions";
import Search from "./search";


function Header(props) {

    let bookList = props.bookState.bookList;
    let numPerPage = props.bookState.numPerPage;

    return (
        <div>        
            <div className="jumbotron">
                <h1>Welcome to Service Pros Library in React</h1>             
                <h3>You are viewing {bookList.length} book(s).</h3>               
                <p>Please click <button className="btn btn-primary" onClick={ () => BookActions.getAllBooks() } >View All</button> to view all, or search below</p> 
                <Search />   
                <p>Limit Results:</p>
                <div className="btn-group mr-2" role="group" aria-label="First group">                    
                    <button type="button" className={`btn btn-secondary ${isActive(10)}`} onClick={() =>BookActions.changeNumPerPage(bookList, 10)}>10</button>
                    <button type="button" className={`btn btn-secondary ${isActive(15)}`} onClick={() =>BookActions.changeNumPerPage(bookList, 15)}>15</button>
                    <button type="button" className={`btn btn-secondary ${isActive(30)}`} onClick={() =>BookActions.changeNumPerPage(bookList, 30)}>30</button>
                    <button type="button" className={`btn btn-secondary ${isActive(bookList.length)}`} onClick={() =>BookActions.changeNumPerPage(bookList, bookList.length)}>Show All</button>
                </div>
                           
            </div>  
                
        </div>
    );

    function isActive(num){
        if(num === numPerPage){
            return "active";
        }
    }

}

export default Header;