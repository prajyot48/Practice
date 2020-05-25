import React from 'react'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter,faInstagram}from '@fortawesome/free-brands-svg-icons' 
function ReUsableCard(props){
    return(
        <div className="team-card">
                        <img src={props.name ? require('../assets/'+props.name.toLowerCase()+'.jpg'):require("../assets/player.png")}  alt="Person Image" />
                        <div className="data">
                            <h2>{props.name}</h2>
                            <i>{props.role}</i>
                            <p>{props.descrip}</p>
                            <a href="#" className="fa fa-facebook"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a href="#" className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter}/> </a>
                            <a href="#" className="fa fa-behance"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
                    </div>
    )
}

class Staff extends React.Component {


    render() {
        return (
            <div>
                <h1 className="staff-title">Our Team</h1>
                <section id="team">
                  <ReUsableCard name="Raunak" role="Head Coach" descrip="Head coach of the team. Also an Mbbs from KJSMC " />
                  <ReUsableCard/>
                  <ReUsableCard/>
                  <ReUsableCard/>
                  <ReUsableCard/>
                  <ReUsableCard/>
                  <ReUsableCard/>
                  <ReUsableCard/>
                  <ReUsableCard/>
                </section>
            </div>
        )
    }

}

export default Staff