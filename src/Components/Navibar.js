import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'

class Navibar extends Component {

  render() {
    return (

      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Will & More</Navbar.Brand>
        
      </Navbar>
      
    );
  }
}

export default Navibar;