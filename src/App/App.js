import React, { Component } from 'react';
import SearchInput from "../SearchInput/SearchInput";
import { FormGroup, Button } from 'react-bootstrap';
import './App.css';


class App extends Component {
   constructor() {
    super();

    this.state = {
      currentAuthor:  {
        "name": "",
        "permalink": ""
      }
    };    
  }

  updateAuthor(author) {
    this.setState({currentAuthor: author})
  }

  urlForAuthor(author) {
    return "https://favqs.com/api/quotes?filter=Mark+Twain&type=author"
  }

  searchForQuotes() {
    const url = this.urlForAuthor(this.state.currentAuthor)

    var request = new Request(url, {
      headers: new Headers({
      }),
       method: "get",
    })

    fetch(request)
      .then(function(response) {
        console.log(response)
      })
      .catch(function(err) {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="App">
        <div>
          Quotes finder
        </div>
        <div className="Search">
          <FormGroup controlId="stateInput">
            <SearchInput updateAuthor={this.updateAuthor.bind(this)} />
            <Button bsStyle="primary" onClick={this.searchForQuotes.bind(this)}>Search</Button>
          </FormGroup>
        </div>
      </div>
    );
  }
}


export default App;
