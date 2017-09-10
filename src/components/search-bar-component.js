import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
      <h5>Search for materials:</h5>
      <input defaultValue={"search"}/>
      </div>
    );
  }
}
