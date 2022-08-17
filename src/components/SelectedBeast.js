import React from "react";
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }
  handleShow = () => {
    console.log("Hello")
    this.setState(() => {
      return {show: true}
    })
  }

  handleClose = () => {
    this.setState(() => {
      return {show: false}
    })
  }
  render() {
    return (
      <Modal show={this.show} onHide={this.handleClose}>
      </Modal>
    )
  }
}

export default SelectedBeast