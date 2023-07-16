// Step 1: import React
import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//let nameData = ["UniWhal", "Rhino Family", "Unicorn Head"];

// Step 2: Create Component
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHornedBeastName: "",
      modalImgUrl: "",
      modalIsShowing: false,
    };
  }

  handleShow = () => {
    console.log("Please");
    this.setState({
      modalIsShowing: true,
    });
  };

  handleClose = () => {
    this.setState({
      modalIsShowing: false,
    });
  };
  // render function
  render() {
    let aminalComponents = [];
    data.forEach((aminal) => {
      //arr2
      aminalComponents.push(
        <Col>
          <HornedBeast
            title={aminal.title}
            imgSRC={aminal.image_url}
            description={aminal.description}
            handleOpenAminal={this.props.handleOpenAminal}
          />
        </Col>
      );
    });
    return (
      <Container>
        <h2>Aminal:</h2>
        <Button variant="primary" onClick={this.handleShow}>
          Launch
        </Button>
        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aminal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalHornedBeastName}</h2>
            <img src={this.state.modalImgUrl} />
          </Modal.Body>
        </Modal>
        <Row>{aminalComponents}</Row>
      </Container>
    );
  }
}

// Step 3: Export Component
export default Main;
