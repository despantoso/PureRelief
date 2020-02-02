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

class ShelterInventory extends React.Component {
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
        <h6 style = {{fontWeight: "bold", fontSize: "2vw", textAlign: "left"}}>
          NonPerishables and Water
        </h6>
         <p></p>
         <Table the size="lg">
          <thead>
            <td style= {{fontWeight: "bold"}}>Items</td>
            <td style= {{fontWeight: "bold", textAlign: "right"}}>Current Amount</td>
          </thead>
          
          <tbody>
            <tr>
              <td>Water</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
            <tr>
              <td>Canned Food</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
            <tr>
              <td>More Canned Food</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
          </tbody>
        </Table>
        
        <ButtonToolbar>
          <Button variant="primary" size="md" active>
            Add Item
          </Button>
        </ButtonToolbar>

        <p></p>

        <h6 style = {{fontWeight: "bold", fontSize: "2vw", textAlign: "left"  }}>
          First Aid Supplies
        </h6>
         <p></p>
         <Table the size="lg">
          <thead>
            <td style={{fontWeight: "bold"}}>Items</td>
            <td style= {{fontWeight: "bold", textAlign: "right"}}>Current Amount</td>
          </thead>
          
          <tbody>
            <tr>
              <td>First Aid Kits</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
            <tr>
              <td>Sterile Gloves</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
            <tr>
              <td >Pain Relievers</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button variant="primary" size="md" active>
            Add Item
          </Button>
        </ButtonToolbar>

        <p></p>

        <h6 style = {{fontWeight: "bold", fontSize: "2vw", textAlign: "left"  }}>
          Sanitary Products
        </h6>

         <p></p>
         <Table the size="lg">
          <thead>
            <td style= {{fontWeight: "bold"}}>Items</td>
            <td style= {{fontWeight: "bold", textAlign: "right"}}>Current Amount</td>
          </thead>
          
          <tbody>
            <tr>
              <td>Soap</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
            <tr>
              <td>Feminine Products and diapers</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
            <tr>
              <td>Wet Wipes</td>
              <td style= {{textAlign: "right"}}>1</td>
            </tr>
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button variant="primary" size="md" active>
            Add Item
          </Button>
        </ButtonToolbar>

        <p></p>
      </Container>
      </div>
    )

  }
}
export default ShelterInventory