import React, {Component} from 'react';


class Book extends Component {
    handleGetData = (event) => {
        event.preventDefault();
        const items = event.target.items;
        this.props.handleGetData(items);
    };
  
    render() {
        let bookItems = [];
        this.props.items.map((item) => bookItems.push(
            <li key={item.id} value={item.volumeInfo.title}>
              <p>Book: {item.volumeInfo.title}</p>
              <p>Pages: {item.volumeInfo.pageCount}</p>
            </li>
            ))
  
        return (
            <div>
                <button onClick={this.handleGetData}>Get Book List</button>
                <ul>
                    {bookItems}
                </ul>
            </div>
        );
    }
  }

  export default Book;