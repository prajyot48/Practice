import React, { Component } from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = React.createRef();
  }

  render() {
    return (
      <div className="contact">
        <div>
          <form className="form1">
            <h2 className="h2">CONTACT US</h2>
            <p className="p" type="Name:"><input className="contact-input" placeholder="Write your name here.."></input></p>
            <p className="p" type="Email:"><input className="contact-input" placeholder="Let us know how to contact you back.."></input></p>
            <p className="p" type="Message:"><input className="contact-input" placeholder="What would you like to tell us.."></input></p>
            <button className="contact-button">Send Message</button>
            <div className="div">
              <span className="span"><FontAwesomeIcon icon={faPhone} /></span>+91 93246 86568
                <span className="span"><FontAwesomeIcon icon={faEnvelope} /></span> smufc@gmail.com
              </div>
          </form>
      </div>
      </div>
    )

  }
}




export default Contact;
