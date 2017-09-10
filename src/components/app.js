import React, { Component } from 'react';
import Header from './header-component';
import RecoupMain from './recoup-main-component';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RecoupMain />
      </div>
    );
  }
}
