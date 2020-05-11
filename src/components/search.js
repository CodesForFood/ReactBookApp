import React from "react";
import BookActions from "../actions/bookActions";

class Search extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            searchOpt: "title",
            searchTerm: ""
        }

        this.handleChange = this.handleChange.bind(this); 
        this.searchBooks = this.searchBooks.bind(this);    
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });       
    }

    searchBooks(){
        BookActions.searchBooks(this.state.searchOpt, this.state.searchTerm);
    }

    render(){
        return (
            <div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="searchOpt" value="isbn" onChange={this.handleChange} />ISBN
                    </label>
                </div>
                <div className="form-check-inline">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="searchOpt" value="title" onChange={this.handleChange} defaultChecked/>Title
                    </label>
                </div>
                <div className="form-check-inline disabled">
                    <label className="form-check-label"> 
                        <input type="radio" className="form-check-input" name="searchOpt" value="author" onChange={this.handleChange}/>Author
                    </label>
                </div>
                <div className="form-check-inline disabled">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="searchOpt" value="year" onChange={this.handleChange}/>Year
                    </label>
                </div>
            
                <div className="input-group mb-3">                
                    <input type="text" className="form-control" id="search" name="searchTerm" onChange={this.handleChange} placeholder="Enter Search Term"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick = { this.searchBooks} >Search</button>
                    </div>
                </div>
            </div>
        );
    }


}

export default Search;