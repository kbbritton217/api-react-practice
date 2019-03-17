import React, { Component } from 'react';
import Api from './Api';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        items: []
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
      fetch('https://www.googleapis.com/books/v1/volumes?q=subject:Juvenile')
      .then(response => response.json())
      .then((data) => {
          this.setState({
              items: data.items
          });
      });
  };

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
          <Api handleGetData={this.getData} items={this.state.items}/>
        </section>
      </div>
    );
  }
}



export default App;
