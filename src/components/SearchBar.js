import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";

class SearchBar extends React.Component {

  render() {
    return (
      <Form>
        <FloatingLabel
          controlId="floatingSelect"
          label="hornFilter"
        >
          <Form.Select>
            <option value={1}>1 Horn</option>
            <option value={2}>2 Horns</option>
            <option value={3}>3 Horns</option>
            <option value={100}>100 Horns</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Search"
        >
        {/* <Form.Control size="md" placeholder="Search" onChange={this.props.handleSearchChange}></Form.Control> */}
        </FloatingLabel>
      </Form>
    )
  }
}

export default SearchBar;