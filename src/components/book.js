import React from 'react'
import ShelfChanger from './shelfChanger'

class Book extends React.Component {

state = {
  shelfName: this.props.book.shelf || 'none'
}
render(){
 console.log(this);
  const author = this.props.book.authors &&  this
  .props
  .book
  .authors

  let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`)
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: url }}></div>
          <ShelfChanger book ={this.props.book} onmoveBook ={this.props.onmoveBook}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>

)}
}

export default Book
