import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import {Form, Button, Card, Container, ButtonGroup, ToggleButton, Row, Col, ButtonToolbar} from 'react-bootstrap'


var socket;

class ShelterLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isReliefOrg: false,
        }
    }

    userInformation()
    {
        console.log("User Infor Package")
        var username = this.refs.userName.value;
        var password = this.refs.userPassword.value;

        io("http://10.136.104.49:48900").emit('login', JSON.stringify({username:username, password:password}))
       socket = io("http://10.136.104.49:48900").on('login', function (message) {
            console.log(`Received message: ${message}`);
          })  
          console.log(socket)
    }

    render(){
        var isReliefOrgString = this.state.isReliefOrgString;

        return(
            <div>
                <br/>
                <h1 style={{fontWeight: "bold", fontSize: "6vw", textAlign: "center"}}>
                    PureRelief
                </h1>
                <br/>
                <br/>
                <br/>
                <ButtonToolbar className="justify-content-center">
                    <Link to="/Login/ShelterLogin" style={{alignContent: "center"}}>
                    <Button variant="success" size="lg" style={{margin: "4px"}}>Shelters</Button>
                    </Link>
                    <br/>
                    <Link to="/Login/RCLogin" style={{alignContent: "center"}}>
                    <Button variant="info" size="lg" style={{margin: "4px"}}>
                        Relief Organization
                    </Button>
                    </Link>
                </ButtonToolbar>
                <br/>
                <div className="login-box">
                <Container>
                <Form>
                <h4>Please Sign In or Register</h4>
                <Form.Group controlId="userInformation">
                    <Form.Label>Shelter Username</Form.Label>
                    <Form.Control 
                    type="text"
                    ref="userName"
                    required
                    placeholder="Enter username"/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    ref="userPassword" 
                    placeholder="Password" 
                    required/>
                    <br/>
                    <Link to="/Shelter" style={{alignContent: "center"}}>
                        <Button 
                        onClick={() => {this.userInformation()}}
                        variant="primary" 
                        style={{margin: "4px"}}
                        block
                        >Sign In</Button>
                        </Link>
                        <br/>
                        <Link to="/signup" style={{alignContent: "center"}}>
                            <Button 
                            variant="outline-primary"
                            style={{margin: "4px"}}
                            block> Create Account</Button>
                        </Link>
                </Form.Group>
                </Form>
                </Container>
                </div>
            </div>
        )
    }
}
export default ShelterLogin