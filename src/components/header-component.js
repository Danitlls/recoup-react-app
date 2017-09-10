import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <a href="#">logo</a>
        </div>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">More Ideas</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
