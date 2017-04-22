import React, { Component } from 'react';
import SearchInput from "./SearchInput";
import { FormGroup } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Quotes finder
        </div>
        <div className="Search">
          <FormGroup controlId="stateInput">
            <SearchInput />
          </FormGroup>
        </div>
      </div>
    );
  }
}


export default App;
