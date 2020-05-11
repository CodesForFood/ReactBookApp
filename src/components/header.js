import React from 'react';
import BookActions from "../actions/bookActions";
import Search from "./search";


function Header(props) {
    return (
        <div>        
            <div className="jumbotron">
                <h1>Welcome to Service Pros Library in React</h1>             
                <h3>You are viewing {props.bookState.bookList.length} book(s).</h3>               
                <p>Please click <button className="btn btn-primary" onClick={ () => BookActions.getAllBooks() } >View All</button> to view all, or search below</p>            
            </div>  
            <Search />         
        </div>
    );
}

export default Header;