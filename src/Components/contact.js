import React from 'react';
import '../App.css';
import { FormGroup, Label, Input } from "reactstrap";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
// import 'fa-icons';

class Contact extends React.Component {
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
                    SOuth Mumbai
                  </ToastBody>
                </Toast>
              </div>
              <div className="p-3 my-2 rounded">
              <Toast>
                  <ToastHeader>
                  Phone
                </ToastHeader>
                  <ToastBody>
                    8080626605
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
            <Input type="textarea" name="text" placeholder="Your Name" id="exampleText"/>
            </div>
            <div className="text">
            <Input type="textarea" name="text" placeholder="Your Email" id="exampleText1" />
            </div>
          </div>
          <div className="text">
            <FormGroup>
              <Input type="textarea" name="text"  placeholder="Your Messages" id="exampleText2" />
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
      </div>

    )

  }
}




export default Contact;
