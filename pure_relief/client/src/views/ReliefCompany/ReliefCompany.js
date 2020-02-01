import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ButtonToolbar } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

class ReliefCompany extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1 style = {{fontWeight: "bold", fontSize: "6vw", textAlign: "center"  }}>
          PureRelief
        </h1>

        <Navbar bg="primary" variant="dark">
            <ButtonGroup size="lg">
                <Button>Donations</Button>
                <Button>Requests</Button>
            </ButtonGroup>
            <Nav className="mr-auto">
        </Nav>

        <Nav >
          <Nav.Link href="#home" style = {{fontWeight: "medium", fontSize: "1.5vw", color:"white"}}>Company Name </Nav.Link>
        </Nav>
        
        </Navbar>

        <p>
        </p>

      <Container>
         <p></p>


        <Alert variant= "danger" style = {{textAlign: "center", fontWeight: "bold", fontSize: "2vw"}}>
            Urgent Requests
        </Alert>

        <p></p>
         <Card style={{ width: '70rem', height: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Shelter A</Card.Title>
            <Card.Text>
                Heyyyyy 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>

        <p>
        </p>

        <Alert variant= "warning" style = {{textAlign: "center", fontWeight: "bold", fontSize: "2vw"}}>
            Mild Requests
        </Alert>

        <p></p>

        <Card style={{ width: '70rem', height: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Shelter B</Card.Title>
            <Card.Text>
                Heyyyyy 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>

        <p>
        </p>

        <Alert variant= "success" style = {{textAlign: "center", fontWeight: "bold", fontSize: "2vw"}}>
            Low-Level Requests
        </Alert>

        <p></p>

        <Card style={{ width: '70rem', height: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Shelter C</Card.Title>
            <Card.Text>
                Heyyyyy 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
      </Container>
      </div>
    )

  }
}
export default ReliefCompany