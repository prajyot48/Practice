import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import Contact from './Components/contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />

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
