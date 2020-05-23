import React, { Component } from 'react'
import '../App.css';
import { FormGroup, Label, Input } from "reactstrap";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = React.createRef();
  }

  // componentDidMount() {
  //   const googleMapScript = document.createElement("script");
  //   googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDEkGijSUn59Urd96tftpKsizYGqkUaMFQ&libraries=places`;
  //   window.document.body.appendChild(googleMapScript);
  //   googleMapScript.addEventListener("load", () => {
  //     this.googleMap = this.createGoogleMap();
  //     this.marker = this.createMarker();
  //   });
    

  // }
  // createGoogleMap = () =>
  //   new window.google.maps.Map(this.googleMapRef.current, {
  //     zoom: 16,
  //     center: {
  //       lat: 18.955465,
  //       lng: 72.810947
  //     },
  //     disableDefaultUI: true
  //   });
  // createMarker = () =>
  //   new window.google.maps.Marker({
  //     position: { lat: 43.642567, lng: -79.387054 },
  //     map: this.googleMap
  //   })

  render() {
    return (
      <div className="Contact">

        <div className="contact-form">
          <div className="contact-us">
            <div>
              <h1 className="h1">
                CONTACT US
             </h1>
            </div>
            {/* details */}
            <div >
              <div className="p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    Our Location
                </ToastHeader>
                  <ToastBody>
                    South Mumbai
                  </ToastBody>
                </Toast>
              </div>
              <div className="p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    Phone
                </ToastHeader>
                  <ToastBody>
                    +91 93246 86568
                  </ToastBody>
                </Toast>
              </div>
              <div className="p-3 my-2 rounded">
                <Toast>
                  <ToastHeader>
                    Mail
                </ToastHeader>
                  <ToastBody>
                    southmumbaiunited@gmail.com

                  </ToastBody>
                </Toast>
              </div>
            </div>
          </div>
          <div className="contact-comment">
            <div className="text">

              <h1>
                <Label for="exampleText">              LEAVE A COMMENT
              </Label>
              </h1>
            </div>
            <div id="personal">
              <div className="text">
                <FormGroup>
                  <Label>Name</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Your Name" />
                </FormGroup>
              </div>
              <div className="text">
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
                </FormGroup>
              </div>
            </div>
            <div className="text">
              <FormGroup>
                <Input type="textarea" name="text" placeholder="Your Messages" id="exampleText2" />
              </FormGroup>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-details-list">
            <div class="col-lg-4">
              <div class="contact-option">
                <span className="type">Phone</span>
                <p>(123) 118 9999 - (123) 118 9999</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact-option">
                <span className="type">Address</span>
                <p>72 Kangnam, 45 Opal Point South Bombay </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact-option">
                <span className="type">Email</span>
                <p>southmumbaiunited@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-send-email">
          </div>
          <div className="contact-footer">
          </div>
        </div>
        <div className="google-map" ref={this.googleMapRef}
          // style={{ width: '400px', height: '300px' }}
        >
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.7284178314467!2d72.80990065788157!3d18.955421533548357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0f115aae39%3A0x66ef35bcecb08dfe!2sChowpatty%2C%20Girgaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1589120956938!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        </div>
      </div>

    )

  }
}




export default Contact;
