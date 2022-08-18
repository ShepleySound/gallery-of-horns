import React from "react";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header_title">{this.props.title}</h1>
      </header>
    )
  }
}

export default Header