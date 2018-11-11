import React from 'react'
import {Route} from 'react-router-dom'
import BookShelf from './components/Book Shelf'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/shelves'
import Search from './components/search'
import Header from './components/header'
import SearchButton from './components/searchButton'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search/>
        ) : (

          <div className="list-books">
            <Header/>

            <Shelves/>

            <SearchButton/>

          </div>
        )}
      </div>

    )
  }
}

export default BooksApp
