// // Step 1: import React
// import React from "react";
// import HornedBeast from "./HornedBeast";
// import data from "./data.json";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// //let nameData = ["UniWhal", "Rhino Family", "Unicorn Head"];

// // Step 2: Create Component
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalHornedBeastName: "",
//       modalImgUrl: "",
//       modalIsShowing: false,
//     };
//   }

//   handleShow = () => {
//     this.setState({
//       modalIsShowing: true,
//     });
//   };

//   handleClose = () => {
//     this.setState({
//       modalIsShowing: false,
//     });
//   };
//   // render function
//   render() {
//     let aminalComponents = [];
//     data.forEach((aminal) => {
//       //arr2
//       aminalComponents.push(
//         <Col>
//           <HornedBeast
//             title={aminal.title}
//             imgSRC={aminal.image_url}
//             description={aminal.description}
//             handleOpenAminal={this.props.handleOpenAminal}
//           />
//         </Col>
//       );
//     });
//     return (
//       <Container>
//         <input
//           className="search"
//           type="text"
//           // value={searchValue}
//           onChange={this.handleSearchChange}
//           placeholder="Search by title or keyword"
//         />
//         <Row>
//           {filteredData.map((aminal) => (
//             <Col
//               key={aminal.id}
//               sm={4}
//               onClick={() => this.handleSelectBeast(aminal)}
//             >
//               <HornedBeast
//                 title={aminal.title}
//                 imgSrc={aminal.image_url}
//                 description={aminal.description}
//               />
//             </Col>
//           ))}
//         </Row>
//         <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Aminal</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h2>{this.state.modalHornedBeastName}</h2>
//             <img src={this.state.modalImgUrl} />
//           </Modal.Body>
//         </Modal>
//         <Row>{aminalComponents}</Row>
//       </Container>
//     );
//   }
// }

// // Step 3: Export Component
// export default Main;

import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHornedBeastName: "",
      modalImgUrl: "",
      modalIsShowing: false,
      searchValue: "",
    };
  }
  handleShow = () => {
    this.setState({
      modalIsShowing: true,
    });
  };
  handleClose = () => {
    this.setState({
      modalIsShowing: false,
    });
  };
  handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState({ searchValue });
  };
  handleSelectBeast = (beast) => {
    this.setState({
      modalHornedBeastName: beast.title,
      modalImgUrl: beast.imgSrc,
      modalIsShowing: true,
    });
  };
  render() {
    const { searchValue, modalIsShowing, modalHornedBeastName, modalImgUrl } =
      this.state;
    const filteredData = data.filter(
      (beast) =>
        beast.title.toLowerCase().includes(searchValue) ||
        beast.description.toLowerCase().includes(searchValue)
    );
    const aminalComponents = filteredData.map((beast) => (
      <Col key={beast.id}>
        <HornedBeast
          title={beast.title}
          imgSrc={beast.imgSrc}
          description={beast.description}
          handleOpenAminal={this.props.handleOpenAminal}
        />
      </Col>
    ));
    return (
      <Container>
        <input
          className="search"
          type="text"
          value={searchValue}
          onChange={this.handleSearchChange}
          placeholder="Search by title or keyword"
        />
        <Row>{aminalComponents}</Row>
        <Modal show={modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Aminal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{modalHornedBeastName}</h2>
            <img src={modalImgUrl} alt={modalHornedBeastName} />
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}
export default Main;
