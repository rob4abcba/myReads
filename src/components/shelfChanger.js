import React from 'react'

class ShelfChanger extends React.Component {
  state = {
    shelfName: this.props.book.shelf || 'none'
  }

  moveBookShelf = (book,shelf) => {
    this.setState({shelfName: shelf})
    this.props.onmoveBook(book,shelf)
    console.log(shelf)
  }

  componentWillReceiveProps = (props) => {
    this.props = props;
    this.setState({shelfName : this.props.book.shelf});
  }
render(){
  return(
    <div className="book-shelf-changer">
      <select value = {this.state.shelfName} onChange={(evt) => this.moveBookShelf(this.props.book, evt.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>)
}
}

export default ShelfChanger
