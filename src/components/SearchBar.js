import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";

class SearchBar extends React.Component {

  render() {
    return (
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Search"
        >
        <Form.Control size="md" placeholder="Search" onChange={this.props.handleSearchChange}></Form.Control>
        </FloatingLabel>
      </Form>
    )
  }
}

export default SearchBar;