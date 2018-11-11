import React from 'react'
import ShelfChanger from './shelfChanger'

class Book extends React.Component {
render(){

  let author = this.book.author &&  this
  .props
  .book
  .authors

  let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`)
  return(
    <li>
      <div className="book">
        <div className="book-top">

          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: url }}></div>
          <ShelfChanger/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>

)}
}

export default Book
