

import React from 'react';
import { Card, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./style.css"

function UseAbleCard(props) {
  return (<Card body className="card">
    <CardTitle>{props.no} {props.name} {props.lname}</CardTitle>
    <CardImg src={props.src} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
    <CardText>{props.txt}</CardText>
  </Card>);
}
const Gallery = (props) => {
  return (
    <div>

    <Row>

      <Col xs="3">
        <UseAbleCard no="25" name='viral' lname="sanghvi" src={require('../../assets/aboutbg.png')} style={{ radius: '50px', width: '80', height: '70px' }} txt='plays for mdfa and private matches' />
        <UseAbleCard no="22" name='prajyot' lname="Dhotre" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="24" name='Jonhan' lname="Poojari" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="5" name='Shushant' lname="Waghulde" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="22" name='Kazim' lname="Rizvi" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="10" name='Soureen' lname="Gaitonde" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="29" name='Ishtiyaqye' lname="Siddique" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard name='Yash' lname="Nakashe" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />

      </Col>
      <Col xs="3">
        <UseAbleCard no="2" name='Sarhak' lname="Bhosle" src={('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="30" name='Harsh' lname="Shah" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="7" name='Siddarth' lname="Niar" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="8" name='Pranav' lname="Bhat" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="15" name='Krutik' lname="Panchal" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="12" name='Rohit' lname="Lakkabathini" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="21" name='Bosco' lname="Chiramel" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="1" name='Jay' lname="Koradia" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
      </Col>
      <Col xs="3">
        <UseAbleCard no="3" name='Ashish' lname="Pandey" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="4" name='Elvis' lname="Farrao" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="6" name='Rahul' lname="Singh" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="9" name='Unmesh' lname="Dhere" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="13" name='Rushikesh' lname="Devre" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />

        <UseAbleCard no="26" name='Ronaq' lname="Desai" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="14" name='Sohel' src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="11" name='Manan' lname="Desai" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
      </Col>
      <Col xs="3">



        <UseAbleCard no="14" name='Ahad' lname="Khan" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="14" name='Vignesh' lname="Palani" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />

        <UseAbleCard no="16" name='Ratnadeep' lname="Gawde" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="19" name='Azlan' lname="Bhamla" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />

        <UseAbleCard no="23" name='Utkarsh' lname="singh" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="27" name='Smeet' lname="Patel" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard no="28" name='Aavishkar' src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />

        <UseAbleCard name='Adwait' lname="Bandre" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />
        <UseAbleCard name='Shubham' lname="Kadam" src={require('../../assets/aboutbg.png')} txt='plays for mdfa and private matches' />

      </Col>


    </Row>
    </div>

  );
};

export default Gallery;