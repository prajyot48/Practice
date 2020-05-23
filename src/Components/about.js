import React from 'react'
// import Img from '../assets/aboutbg.png'
import { Table, ModalBody } from 'reactstrap';
export default class About extends React.Component {

    render() {
        return (
            <div className="about">

                <div id="about-title">
                    <p>About Our Club</p>
                </div>
                <div id="about-title-desc">
                    <p>Eastablished in 2008, South Mumbai United was started with an intention to increase the number of people playing this beautiful game.
                    </p>
                </div>
                <br />
                <div id="row2">
                    <ModalBody id="modal">
                        <div id="about-history">
                            <p>CLUB HISTORY</p>
                        </div>
                        <div id="history-detail">
                            <p>
                                Started in 2008 by a group of young boys as local football club to play football as semi-professional.
                                Club was sadly shut down in 2015.
                                </p>

                            <p>
                                Restarted in 2019, This team aims to make SMU stronger and our aim is to constantly ensure quality standards to help players develop holistically.<br />
                                <strong>
                                    SMU is back and Stronger and this time with a Girls team too.<br />
                                        SMU is back in Boys MDFA 3rd Division.<br />
                                        SMU Girls Team is are a part of the Indian Women's
                                        League(Qualifiers).
                                        </strong>
                            </p>
                            <p>
                                Our Club is registered with Mumbai District Fotball Association and is praticipating in all major tournaments of the State including State Women's League
                            </p>
                        </div>
                    </ModalBody>


                    <ModalBody id="modal">
                        <div id="about-history">
                            <p>FIXTURES</p>
                        </div>

                        <Table hover borderless>
                            <thead>
                                <tr>

                                    <th>Date</th>
                                    <th>Fixture</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11-2-20</td>
                                    <td>SMU vs Veer</td>
                                </tr>
                                <tr>
                                    <td>16-2-20</td>
                                    <td>SMU vs SMU</td>
                                </tr>
                                <tr>
                                    <td>20-2-20</td>
                                    <td>SMU vs SMU</td>
                                </tr>
                                <tr>
                                    <td>26-2-20</td>
                                    <td>SMU vs SMU</td>
                                </tr>

                            </tbody>
                        </Table>
                    </ModalBody>

                </div>
            </div>
        )
    }
}