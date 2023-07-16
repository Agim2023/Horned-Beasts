import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    const { show, handleClose, selectedBeast } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBeast?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBeast?.image} alt={selectedBeast?.name} />
          <p>{selectedBeast?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default SelectedBeast;
