import React from "react";
import SearchBar from "../SearchBar";
import {ReactComponent as VikingHorn} from '../../assets/vikingHorn_96px_dark.svg';
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="Header_logoContainer">
          <VikingHorn className="Header_logoImage"></VikingHorn>
          <h1 className="Header_logoTitle">{this.props.title}</h1>
        </div>
        <div className="Header_searchBar">
          <Form>
            <FloatingLabel
            controlId="floatingInput"
            label="Search">
              <Form.Control 
                size="md" 
                placeholder="Search" 
                onChange={(event) => { this.props.handleChange(event) } }>
              </Form.Control>
            </FloatingLabel>
          </Form>
            {/* <SearchBar handleChange={this.props.handleChange}></SearchBar> */}
        </div>
      </header>
    )
  }
}

export default Header