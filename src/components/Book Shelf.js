import React from 'react'
import Book from './book'

class BookShelf extends React.Component {
state ={}

render(){
  const books = this.props.shelf.book;
  console.log(this);
  console.log(books);

  return(
   <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title"> {this.props.shelf.name} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        { books && books.map(book => (
            <li key={book.id}>
           <Book  book ={book} onmoveBook ={this.props.onmoveBook} />
          </li>
       ))
      }
        </ol>
      </div>
    </div>
    </div>)
}
}

export default BookShelf
