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
import data from './DummyData'

class ShelterInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      inventoryData: [data],
      numAm0: data[0].shelterNecessities[0].necessityAmount,
      numAm1: data[0].shelterNecessities[1].necessityAmount,
      numAm2: data[0].shelterNecessities[2].necessityAmount
    }
  }


  useItems0 (){
      this.setState({numAm0: this.state.numAm0 - 1});
  }
  useItems1 (){
    this.setState({numAm1: this.state.numAm1 - 1});
  }
  useItems2 (){
    this.setState({numAm2: this.state.numAm2 - 1});
  }
  render() {
    console.log(this.state.inventoryData[0][0].id[0]);

    const tableList = this.state.inventoryData[0].map(function(inventory)
    {return(
      <Container key={inventory.id}>
      <h6 style = {{fontWeight: "bold", fontSize: "2vw", textAlign: "left"}}>
        {inventory.shelterName}
      </h6>
      <br/>
      <Table the size="lg">
            <thead>
              <td style= {{fontWeight: "bold"}}>Items</td>
              <td style= {{fontWeight: "bold", textAlign: "right"}}>Current Amount</td>
            </thead>
            
            <tbody>
              <tr>
              <td>{inventory.shelterNecessities[0].necessityName}</td>
              <td style= {{textAlign: "right"}}>{this.state.numAm0}</td>
                <Button onClick={this.useItems0.bind(this)} variant="primary" size="sm" active>
                  Remove
                </Button>
              </tr>

              <tr>
              <td>{inventory.shelterNecessities[1].necessityName}</td>
              <td style= {{textAlign: "right"}}>{this.state.numAm1}</td>
              <Button onClick={this.useItems1.bind(this)} variant="primary" size="sm" active>
                Remove
              </Button>
            </tr>

            <tr>
              <td >{inventory.shelterNecessities[2].necessityName}</td>
              <td style= {{textAlign: "right"}}>{this.state.numAm2}</td>
              <Button onClick={this.useItems2.bind(this)} variant="primary" size="sm" active>
                Remove
              </Button>
            </tr>
            </tbody>
          </Table>
          <br/>
      </Container>
      )
    }.bind(this)
    )
    
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
        {tableList}
        <ButtonToolbar>
          <Button variant="primary" size="md" active>
            Add Item
          </Button>
        </ButtonToolbar>
        <p></p>
        {/*
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
              <Button variant="primary" size="sm" active>
                Remove
              </Button>
            </tr>
            <tr>
              <td>Sterile Gloves</td>
              <td style= {{textAlign: "right"}}>1</td>
              <Button variant="primary" size="sm" active>
                Remove
              </Button>
            </tr>
            <tr>
              <td >Pain Relievers</td>
              <td style= {{textAlign: "right"}}>1</td>
              <Button variant="primary" size="sm" active>
                Remove
              </Button>
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
              <Button variant="primary" size="sm" active>
                Remove
              </Button>
            </tr>
            <tr>
              <td>Feminine Products and diapers</td>
              <td style= {{textAlign: "right"}}>1</td>
              <Button variant="primary" size="sm" active>
                Remove
              </Button>
            </tr>
            <tr>
              <td>Wet Wipes</td>
              <td style= {{textAlign: "right"}}>1</td>
              <Button variant="primary" size="sm" active>
                Remove
              </Button>
            </tr>
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button variant="primary" size="md" active>
            Add Item
          </Button>
        </ButtonToolbar>

        <p></p>
        */}
      </Container>
      </div>
    )

  }
}
export default ShelterInventory