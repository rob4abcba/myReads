import React from 'react'
import BookShelf from './Book Shelf'
import Header from './header'
import SearchButton from './searchButton'


class Shelves extends React.Component {
state = {}

componentDidMount = () => {
  this
  .props
  .onrefreshBooks();
}

updateBookShelf = () => {

  let newReading = {
    name:'Currently Reading',
    book:
    this
    .props
    .books
    .filter(book => book.shelf === 'currentlyReading')
  };

  let wantRead = {
    name:'Want to Read',
    book:
    this
    .props
    .books
    .filter(book => book.shelf === 'wantToRead')
  };

  let read = {
    name:'Read',
    book:
    this
    .props
    .books
    .filter(book => book.shelf === 'read')
  };
  return( [newReading, wantRead, read]);

}



render(){
  let bookShelves = [];
  if ( this.props.books && this.props.books.length) {
    bookShelves = this.updateBookShelf();
    console.log(bookShelves);
  }

  return(

<div>
  <Header/>
  {/*shelves*/}
  <div className="list-books">
  <div className="list-books-content">
  {/*Shelf*/}
    <div>
    { bookShelves && bookShelves.map((bookShelf) => (<BookShelf
       key = {bookShelf.name}
       shelf = {bookShelf}
       onmoveBook = {this.props.onmoveBook}
      /> ))}

    </div>
    <SearchButton/>
  </div>
  </div>
  </div>)
}
}

export default Shelves
