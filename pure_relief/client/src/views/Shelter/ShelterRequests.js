import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../../assets/logo192.png'
import { ButtonToolbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import './ShelterRequests.css'

class ShelterRequest extends React.Component {
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
                <Link to="/Shelter/Inventory">
                  <Button>Inventory</Button>
                </Link>
                <Link to="/Shelter/Requests">
                  <Button>Requests</Button>
                </Link>        
            </ButtonGroup>
            <Nav className="mr-auto">
        </Nav>

        <Nav >
          <Nav.Link href="#home" style = {{fontWeight: "medium", fontSize: "1.5vw", color:"white"}}>Shelter Name </Nav.Link>
        </Nav>
        
        </Navbar>

        <p>
        </p>

      <Container>
      <Form>
            <br/>
            <h2 style = {{fontWeight: "bold", textAlign: "left"}}>
                Request Supplies
            </h2>

            <br/>
            <h5 style = {{fontWeight: "bold", textAlign: "left"}}>
                Check off Priority Level of Request:
            </h5>
            <h6 style = {{textAlign: "left"}}>
                    (Please only select once)
            </h6>

            {['checkbox'].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Urgent" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="Mild" type={type} id={`inline-${type}-2`} />
                <Form.Check inline label="Low" type={type} id={`inline-${type}-3`} />
                </div>
            ))}

            <br/>
            <h6 style = {{fontWeight: "bold", textAlign: "left"}}>
            How many people is your shelter responsible for:
            </h6>

            <Form.Group className="box">
                <Form.Row>
                    <Form.Label column lg={2}>
                    People:
                    </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Insert Number" />
                    </Col>
                </Form.Row>
            </Form.Group>

            <br/>
            <h6 style = {{fontWeight: "bold", textAlign: "left"}}>
            Check off supplies you are in need for:
            </h6>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Water" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Non-perishables" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="First-Aid" />
            </Form.Group>

            <Button variant="primary">Submit</Button>
        </Form>
      </Container>
      </div>
    )

  }
}
export default ShelterRequest