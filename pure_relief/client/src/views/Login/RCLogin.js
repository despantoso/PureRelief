import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {Form, Button, Card, Container, ButtonGroup, ToggleButton, Row, Col, ButtonToolbar} from 'react-bootstrap'

class RCLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isReliefOrg: true,
        }
    }

    userInformation()
    {
        console.log("User Infor Package")
        const userInfo = {
            "userName": this.refs.userName.value,
            "userPassword":this.refs.userPassword.value,
            "userType" : this.state.isReliefOrg
        }
        console.log(userInfo)
    }

    render(){
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
                    <Form.Label>Relief Organization Username</Form.Label>
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
                    <Link to="/ReliefCompany/Requests" style={{alignContent: "center"}}>
                        <Button 
                        onClick={() => {this.userInformation()}}
                        variant="primary" 
                        style={{margin: "4px"}}
                        block
                        >Sign In</Button>
                        </Link>
                        <br/>
                        <Link to="/RCSignUp" style={{alignContent: "center"}}>
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
export default RCLogin