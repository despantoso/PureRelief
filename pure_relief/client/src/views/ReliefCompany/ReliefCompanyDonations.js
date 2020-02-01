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
        
        </Navbar>

        <p>
        </p>

      <Container>
        
      </Container>
      </div>
    )

  }
}
export default ReliefCompanyDonations