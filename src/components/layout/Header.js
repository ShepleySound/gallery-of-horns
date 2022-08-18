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
            controlId="floatingSelect"
            label="hornFilter"
            >
              <Form.Select
                onChange={(event) => { this.props.handleFilterChange(event) } }
              >
                <option value={1}>1 Horn</option>
                <option value={2}>2 Horns</option>
                <option value={3}>3 Horns</option>
                <option value={100}>100 Horns</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel
            controlId="floatingInput"
            label="Search">
              <Form.Control 
                placeholder="Search" 
                onChange={(event) => { this.props.handleSearchChange(event) } }>
              </Form.Control>
            </FloatingLabel>
          </Form>
            {/* <SearchBar handleSearchChange={this.props.handleSearchChange}></SearchBar> */}
        </div>
      </header>
    )
  }
}

export default Header