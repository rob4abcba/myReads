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

moveBook =(book,shelf) => {
  BooksAPI
   .update(book, shelf)
   .then( update => {
     let updatedBookList =
     this.state.books.splice(0);

     let books  = updatedBookList.filter( bookList => bookList.id === book.id);
     if (books.length) {
       books[0].shelf = shelf;
     } else {
       updatedBookList.push(book);
     }
     this.setState({books: updatedBookList});
  })
}

mergeSearchShelf = (shelf, search) => {
let library = [];
shelf.forEach(book => library[book.id] = book.shelf)

search.forEach(book => {book.shelf = library[book.id] || 'none'})

return search;
}
  render() {
  //check books
  console.log(this.state.books)
    return (
      <div className="app">
      <Route exact path = '/' render = { ( () => (  <Shelves  books = {this.state.books} onrefreshBooks = {this.refreshBooks} onmoveBook = {this.moveBook}/> ))} />

       <Route exact path = '/search' render = {( () => (  <Search shelvedBooks = {this.state.books} onmoveBook = {this.moveBook} onmergeSearchShelf = {this.mergeSearchShelf}/>)) } />

       <SearchButton/>
  </div>
    )
  }
}

export default BooksApp
