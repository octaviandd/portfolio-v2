/** @format */

import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyle";
import Navbar from "./layout/Navbar/Navbar";

class App extends React.Component {
  state = {
    isNavbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Home />
        <GlobalStyles />
      </div>
    );
  }
}

export default App;
