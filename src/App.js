import React from 'react';
import './App.css';
// import Example from './Components/Navbar';
// import Footer from './Components/Footer'
import NavBar from './Components/Navbar';
import Icons from './Components/sideIcons';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/scrollToTop';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Icons/>
        <Footer/>
        <ScrollToTopButton />
      </div>
    )
  }
}

export default App;
