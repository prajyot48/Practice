import React from 'react';
import './App.css';
// import Example from './Components/Navbar';
import Contact from './Components/contact';
// import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavBar from './Components/Navbar';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Router>
          <Route path="/contact">
            <Contact />
          </Route>

        </Router>
        {/* <About /> */}
      </div>
    )
  }
}

export default App;
