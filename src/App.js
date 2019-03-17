import React, { Component } from 'react';
import Book from './Book';
import Json from './Json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        items: [],
        post: []
    };
    this.getData = this.getData.bind(this);
    this.makePost = this.makePost.bind(this);
  }

  getData() {
      fetch('https://www.googleapis.com/books/v1/volumes?q=subject:Juvenile')
      .then(response => response.json())
      .then((data) => {
          this.setState({
              items: data.items,
              post: []
          });
      });
  };

  makePost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
          title: 'TestPost',
          body: 'Test Post Was Successful',
          userId: 1
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.json())
  .then((json) => {
    const jsonArray = [];
    jsonArray.push(json);
    this.setState({
      items: [],
      post: jsonArray,
    })
  })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <section>
          <Book handleGetData={this.getData} items={this.state.items} />
          <Json handleMakePost={this.makePost} post={this.state.post} />
        </section>
      </div>
    );
  }
}



export default App;
