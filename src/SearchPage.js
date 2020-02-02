import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchRequest from './SearchRequest';
import SearchResponse from './SearchResponse';

class SearchPage extends Component {
  render() {
    const { searchBooks, books, onSearch, onResetSearch, onMove } = this.props;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'>Close</button>
          </Link>
          <SearchRequest onSearch={onSearch} onClick={onResetSearch} />
        </div>
        <SearchResponse
          searchBooks={searchBooks}
          books={books}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default SearchPage;
