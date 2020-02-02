import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/Alert'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
class ReliefCompanyDonations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1 style = {{fontWeight: "bold", fontSize: "6vw", textAlign: "center" }}>
          PureRelief
        </h1>

        <Navbar bg="primary" variant="dark">
            <ButtonGroup size="lg">
              <Link to="/ReliefCompany/Donations">
                    <Button>Donations</Button>
                  </Link>
                  <Link to="/ReliefCompany/Requests">
                    <Button>Requests</Button>
              </Link>        
            </ButtonGroup>
            <Nav className="mr-auto">
            </Nav>

            <Nav >
                <Nav.Link href="#home" style = {{fontWeight: "medium", fontSize: "1.5vw", color:"white"}}>Company Name </Nav.Link>
            </Nav>

            <Link to="/Login/RCLogin">
                  <Button variant="danger">Sign Out</Button>
            </Link> 
        
        </Navbar>

        <br/>
        <Form>
            <br/>
            <h2 style = {{fontWeight: "bold", textAlign: "left"}}>
                Send Supplies
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
            Please insert name of shelter supplies are being shipped to.
            </h6>

            <Form.Group className="box">
                <Form.Row>
                    <Form.Label column lg={2}>
                    Shelter:
                    </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Insert Name" />
                    </Col>
                </Form.Row>
            </Form.Group>
            <br/>
            <h6 style = {{fontWeight: "bold", textAlign: "left"}}>
            Check off supplies you are sending:
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

            <h6 style = {{fontWeight: "bold", textAlign: "left"}}>
            How many days are the supplies estimated to last?
            </h6>

            <Form.Group className="box">
                <Form.Row>
                    <Form.Label column lg={2}>
                    Days:
                    </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Insert Number" />
                    </Col>
                </Form.Row>
            </Form.Group>
            
            <br/>

            <h6 style = {{fontWeight: "bold", textAlign: "left"}}>
            Additional comments:
            </h6>

            <Form.Group className="box">
                <Form.Row>
                    <Col>
                        <Form.Control type="text" placeholder="Optional input" />
                    </Col>
                </Form.Row>
            </Form.Group>
            <Link to="/ReliefCompany/Requests">
                    <Button variant="primary">Submit</Button>
              </Link>
        </Form>

      <Container>
        
      </Container>
      </div>
    )

  }
}
export default ReliefCompanyDonations