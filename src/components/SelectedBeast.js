import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
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
      <Modal className="Modal" size="md" show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="Modal_title">{this.props.beast?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image 
            className="Modal_image"
            src={this.props.beast?.image_url} 
            alt={this.props.beast?.title}
            rounded
            fluid>
          </Image>
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