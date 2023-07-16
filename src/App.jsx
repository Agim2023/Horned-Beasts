// Step 1 import React
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// Step 2 create a component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHornedBeastName: "UniWhal",
      modalImgUrl:
        "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
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

  handleOpenAminal = (aminalName, aminalImgUrl) => {
    this.setState({
      modalIsShowing: true,
      modalHornedBeastName: aminalName,
      modalImgUrl: aminalImgUrl,
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aminal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalHornedBeastName}</h2>
            <img src={this.state.modalImgUrl} />
          </Modal.Body>
        </Modal>
        <Main handleOpenAminal={this.handleOpenAminal} />
        <Footer />
      </Container>
    );
  }
}

// Step 3 export your component
export default App;
