// Step 1: import React
import React from "react";
import HornedBeast from "./HornedBeast";

import data from "./data.json";

//let nameData = ["UniWhal", "Rhino Family", "Unicorn Head"];

// Step 2: Create Component
class Main extends React.Component {
  // render function
  render() {
    let aminalComponents = [];
    data.forEach((aminal) => {
      //arr2
      aminalComponents.push(
        <HornedBeast
          title={aminal.title}
          imgSRC={aminal.image_url}
          description={aminal.description}
        />
      );
    });
    return (
      <div>
        <h2>Aminal:</h2>
        {aminalComponents}
      </div>
    );
  }
}

// Step 3: Export Component
export default Main;
