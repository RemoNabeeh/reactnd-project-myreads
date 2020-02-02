import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class BooksPage extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>My Reads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            {bookshelves.map(shelf => (
              <Bookshelf
                key={shelf.key}
                shelf={shelf}
                books={books}
                onMove={onMove}
              ></Bookshelf>
            ))}
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksPage;
