// import React
import React from "react";

// Create Component
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritedCount: 0,
    };
  }

  handlefavorited = () => {
    this.setState({
      favoritedCount: this.state.favoritedCount + 1,
    });
  };

  handleClickImage = (event) => {
    this.props.handleOpenAminal(this.props.title, this.props.imgSRC);
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>favorite count: {this.state.favoritedCount}</p>
        <img src={this.props.imgSRC} onClick={this.handleClickImage} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

// Export component
export default HornedBeast;
