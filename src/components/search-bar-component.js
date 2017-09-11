import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {term : ''};
  }

  render() {
    return (
      <div>
      <h5>Search for materials:</h5>
      <input onChange={event => console.log(event.target.value)} />
      </div>
    );
  }
}
