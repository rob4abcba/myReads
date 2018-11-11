import React from 'react'
import BookShelf from './Book Shelf'
import Header from './header'


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
    .filter(book => book.shelf ==='currentlyReading')
  };

  let wantRead = {
    name:'Want to Read',
    book:
    this
    .props
    .books
    .filter(book => book.shelf ==='wantToRead')
  };

  let read = {
    name:'Read',
    book:
    this
    .props
    .books
    .filter(book => book.shelf ==='Read')
  };
  return( [newReading, wantRead, read]);
}



render(){
  let bookShelves = [];
  if ( this.props.books && this.props.books.length) {
    bookShelves = this.updateBookShelf();
  }

  return(
<div>
  <header/>
  {/*shelves*/}
  <div className="list-books-content">
  {/*Shelf*/}
    <div>
    { bookShelves && bookShelves.map((shelf) => (<BookShelf
       key = {shelf.name}
       shelf = {shelf}
      /> ))}

    </div>
  </div>
  </div>)
}
}

export default Shelves
