import React, { Component } from 'react';
import Header from './components/Header/Header';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;