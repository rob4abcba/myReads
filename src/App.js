import React from 'react'
import {Route} from 'react-router-dom'
import BookShelf from './components/Book Shelf'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/shelves'
import Search from './components/search'
import Header from './components/header'
import SearchButton from './components/searchButton'

class BooksApp extends React.Component {
  state = {

    showSearchPage: false
  }

componentDidMount = () => {
  if(this.state.bookNew === true){
    this.refreshBooks();
  }
}
refreshBooks = () => {
  BooksAPI
  .getAll()
  .then((list) => {
    this.setState({
    books: list,
    bookNew: false
  });
});
}

  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search/>
        ) : (

          <div className="list-books">
        <Shelves  books = {this.state.books} onrefreshBooks = {this.refreshBooks}/>)
            <SearchButton/>
          </div>
        )}
      </div>

    )
  }
}

export default BooksApp
