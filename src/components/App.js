import React, { Component } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div className="content">
          {this.props.children}
        </div>
        <div className="sk-spinner sk-spinner-pulse"></div>

        <Footer />
      </div>
    );
  }
}

export default App;
