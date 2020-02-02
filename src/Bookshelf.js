import React from 'react';
import Book from './Book';

const Bookshelf = props => {
  const { shelf, books, onMove } = props;
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.length > 0 &&
            books
              .filter(book => book.shelf === shelf.key)
              .map(book => (
                <Book
                  key={book.id}
                  book={book}
                  shelf={shelf.key}
                  onMove={onMove}
                ></Book>
              ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
