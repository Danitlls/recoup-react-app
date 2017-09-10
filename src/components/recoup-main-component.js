import React, { Component } from 'react';
import SearchBar from './search-bar-component';

export default class RecoupMain extends Component {
  render() {
    return (
      <section>
        <SearchBar />
        <h3>This is the main statefull component</h3>
        <p>it will contain searchbar</p>
        <p>it will contain list of main materials</p>
        <p>and the list of main materials will contain the individual materials</p>

        <p>it will contain space for view the material selectec/ searched for</p>
      </section>
    );
  }
}
