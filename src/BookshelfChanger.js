import React, { Component } from 'react';

class BookshelfChanger extends Component {
  state = {
    value: this.props.shelf
  };

  handleChange = event => {
    const { book, onMove } = this.props;
    const { value } = event.target;

    this.setState(() => ({ value }));
    onMove(book, value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className='book-shelf-changer'>
        <select value={value} onChange={this.handleChange}>
          <option value='move' disabled>
            Move to...
          </option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
