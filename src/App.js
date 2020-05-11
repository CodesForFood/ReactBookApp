import React from 'react';
import './App.css';
import BookStore from "./stores/bookStore";

import Header from "./components/header";
import BookTable from "./components/bookTable";


class App extends React.Component {
	constructor(props){
        super(props);
        this.state = {        
			bookList: []
        };
    }

  	render() {
		return(
			<div className="container">
	  			<Header bookState={this.state} /> 
				<BookTable bookState={this.state}/>
			</div>	  
		)
	};

	addBookListeners(){
        BookStore.addBookListeners(this._onBookChange.bind(this));
	}

	removeBookListeners(){
		BookStore.removeBookListeners(this._onBookChange.bind(this))
	}

	componentDidMount(){
		this.addBookListeners();		  
	}
 
	componentWillUnmount(){
		this.removeBookListeners(); 		    
	}

	_onBookChange(){  
		let bookList = BookStore.getBookList()
        this.setState({bookList});     
    }


}

export default App;
