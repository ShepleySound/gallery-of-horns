import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  render() {
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="Modal_title">{this.props.beast?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            className="Modal_image"
            src={this.props.beast?.image_url} 
            alt={this.props.beast?.title}
            width="450">
          </img>
          <p className="Modal_description">{this.props.beast?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.handleClose}>
            woah
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast