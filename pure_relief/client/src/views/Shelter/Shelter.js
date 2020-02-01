import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../../assets/logo192.png'
import { ButtonToolbar } from 'react-bootstrap';

class Shelter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>

        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home" style = {{fontWeight: "bold", fontSize: "5vw"  }}>PureRelief</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Nav >
          <Nav.Link href="#home" style = {{fontWeight: "medium", fontSize: "1.5vw", color:"white"}}>Company Name </Nav.Link>
        </Nav>
          <Row>
            <Col xs={1} md={1}>
              <img src={image} style={{width: "4vw", height: "4vw"}} />
            </Col>
          </Row>
         </Navbar>

         <ButtonToolbar style = {{float: 'right'}}>
            <Button variant="secondary"  style = {{borderStyle: "solid", borderLeftStyle: "inset", borderRightStyle: "groove", borderBottomStyle: "groove", borderTopStyle: "inset"}}>Request</Button>
            <Button variant="dark"  style = {{borderStyle: "solid", borderLeftStyle: "inset", borderRightStyle: "groove", borderBottomStyle: "groove", borderTopStyle: "inset"}}>Donations</Button>
         </ButtonToolbar>

         <p>
         </p>

         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Shelter A</Card.Title>
            <Card.Text>
            Heyyyyy 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
      </div>
    )

  }
}
export default Shelter