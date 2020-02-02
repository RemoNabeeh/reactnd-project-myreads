import React, { Component } from 'react';

class SearchRequest extends Component {
  state = {
    value: ''
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value }, () => {
      this.props.onSearch(value);
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className='search-books-input-wrapper'>
        <input
          type='text'
          placeholder='Search by title or author'
          value={value}
          onChange={this.handleChange}
          autoFocus
        />
      </div>
    );
  }
}

export default SearchRequest;
