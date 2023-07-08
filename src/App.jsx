// Step 1 import React
import React from "react";
import HornedBeast from "./components/HornedBeast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";

// Step 2 create a component
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HornedBeast title="UniWhal" />
        <HornedBeast title="Rhino Family" />
        <HornedBeast title="Unicorn Head" />
        <Footer />
        <Main />
      </div>
    );
  }
}

// Step 3 export your component
export default App;
