import React from 'react'
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
import Book from './book'

class Search extends React.Component {
state = {
  search:'',
  books:[],
  show: false
}

 timer = null;

search = (value) => {
  clearTimeout(this.timer);
  this.setState({search: value});
  this.timer = setTimeout(this.searchUpdate, 350);
}

searchUpdate = () => {

  if (this.state.search === '') {
    this.setState({error: false , books:[]});
  }

BooksAPI
  .search(this.state.search)
  .then(response =>{
  let searchBookList =[];
  let error = false;

  if (response === undefined || (response.error && response.error !== 'Invalid Search')) {
    error = true;
  }
  else if (response.length) {
    searchBookList = this.props.onmergeSearchShelf(this.props.shelvedBooks,response);
  }
  this.setState({error: error, books: searchBookList});
})
}

componentWillReceiveProps = (props) => {
  this.props = props;
  let searchBookList = this.props.onmergeSearchShelf(this.props.shelvedBooks, this.state.books);
  this.setState({books: searchBookList});
}

render(){
  return(

    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search" >Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"  onChange= {(event) => this.search(event.target.value)} value = {this.state.search.value} />
        </div>
      </div>
      <div className="search-books-results">
        {!this.state.error && (
          <div className = 'searchSuccess'>
            {this.state.books.length} books match
          </div>)}
        {this.state.error && (
            <div className = 'searchError'>
             Error: There was a problem with your search
            </div>
        )}
        <ol className="books-grid">
        {this.state.books && this.state.books.map( book => (
          <li key={book.id}>
         <Book  book ={book} onmoveBook ={this.props.onmoveBook} />
        </li>
      ))}
        </ol>
      </div>
    </div>

  )
}
}

export default Search
