import React from 'react';
import { Card, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';

function UseAbleCard(props) {
  return  <Card body>
  <CardTitle>{props.no} {props.name} {props.lname}</CardTitle>
  <CardImg top width="100%" src={props.src} alt="Card image cap" />
<CardText>{props.txt}</CardText>
</Card>;
}
const GGallery = (props) => {
  return (
    <Row>
      <Col xs="2.5">
      <UseAbleCard no="1" name='Sonal' lname="Kanade"  src='logo' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="2" name='Mahek' lname="Shah" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="4" name='Saili' lname="Kanhat" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="5"name='Vruti' lname="Pandya" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="6"name='Menaita' lname="Lala"src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>  
       
    </Col>
    <Col xs="3">
      <UseAbleCard no="7"name='Kashish' lname="Parmar" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/> 
      <UseAbleCard no="8" name='Ananya' lname="Dornal" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="9" name='Shreya' lname="Bhat" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="10"name='Ishita' lname="Chande" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="11"name='Gabriel' lname="Soanes" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="12"name='Inesita' lname="Fernandes" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>  
      <UseAbleCard no="14"name='Jiana' lname="Muthu" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>  
    </Col>
    <Col xs="3">
      <UseAbleCard no="15" name='Ritu' lname="Walmiki"  src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="16" name='Simran'lname="Punjabi" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="17" name='Drishti' lname="Punjabi" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="18" name='Virati' lname="Gutka" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="19" name='Preetha' lname="Nayak" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>  
      <UseAbleCard no="20"name='Satya' lname="Shetty" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>  
    </Col>
    <Col xs="2.5">
      <UseAbleCard no="22" name='Yashodha' lname="Mahat"src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard no="23" name='Samiksha' lanme="Shetty" src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
      <UseAbleCard  no="27" name='Pearl' src='/assets/256x186.svg' txt='plays for mdfa and private matches'/>
  
    </Col>
   
     
   </Row>

  );
};

export default GGallery;