import React from 'react'
import BookShelf from './Book Shelf'

class Shelves extends React.Component {
render(){
  return(
  //shelves
  <div className="list-books-content">
  {/*Shelf*/}
    <div>
    <BookShelf/>
    </div>
  </div>)
}
}

export default Shelves
