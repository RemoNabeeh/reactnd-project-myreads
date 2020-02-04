import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BooksPage from './BooksPage';
import SearchPage from './SearchPage';
import NotFound from './NotFound.js';

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    error: false
  };

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books: books });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  };

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(err => {
      console.log(err);
      this.setState({ error: true });
    });
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };

  searchForBooks = debounce(300, false, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });

  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    const { books, searchBooks, error } = this.state;
    if (error) {
      return <div>Network error. Please try again later.</div>;
    }
    return (
      <div className='app'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <BooksPage
                bookshelves={bookshelves}
                books={books}
                onMove={this.moveBook}
              />
            )}
          />
          <Route
            path='/search'
            render={() => (
              <SearchPage
                books={books}
                onMove={this.moveBook}
                searchBooks={searchBooks}
                onSearch={this.searchForBooks}
                onResetSearch={this.resetSearch}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
