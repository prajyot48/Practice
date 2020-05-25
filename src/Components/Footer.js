import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

export default class Footer extends React.Component {

    render() {
        return (
            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>SOUTH MUMBAI UNITED<span>FC</span></h3>

                    <p class="footer-links">
                        <a href="#">Home</a>
·
                <a href="#">Blog</a>
                ·                ·
                <a href="#">About</a>
                ·
                <a href="#">Faq</a>
                ·
                <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">smufc &copy; 2019</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>21 Revolution Street</span> Mumbai, India</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1 555 123456</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:smufc@gmail.com">smufc@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the club</span>
                    </p>

                    <div class="footer-icons">

                        <a href={"https://www.facebook.com/SouthMumbaiUnitedFc"}><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href={"https://twitter.com/fc_smu"}><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href={"https://www.instagram.com/southmumbaiunited"}><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href={"https://www.youtube.com/channel/UCwDxrXhDmDHehSDbo76RWCg"}><FontAwesomeIcon icon={faYoutube}/></a>

                    </div>

                </div>

            </footer>
        )
    }
}
