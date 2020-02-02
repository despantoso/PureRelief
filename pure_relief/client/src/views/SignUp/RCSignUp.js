import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


class RCSignUp extends React.Component{
    constructor(props){
        super(props)
    }

    userInformation()
    {
        console.log("User Infor Package")
        const userInfo = {
            "userName": this.refs.userName.value,
            "userPassword":this.refs.userPassword.value,
            "userLocation" : this.refs.userLocation.value
        }
        console.log(userInfo)
    }

    render(){
        return(
            <Container>
                <h1>Creating New Account</h1>
                <br/>
                <Form>
                <Form.Group controlId="userInformation">
                     <h6 style={{fontWeight: "bolder"}}>Enter a username for your account:</h6>
                    <Form.Control 
                    type="text"
                    ref="userName"
                    required
                    placeholder="Enter username"/>
                    <br/>
                    <h6 style={{fontWeight: "bolder"}}>Enter a password for your account:</h6>
                    <Form.Control 
                    type="text"
                    ref="userPassword"
                    required
                    placeholder="Enter password"/>
                    <br/>
                    <h6 style={{fontWeight: "bolder"}}>Enter shelter's location:</h6>
                    <Form.Control 
                    type="text"
                    ref="userLocation"
                    required
                    placeholder="Enter location"/>
                    <br/>
                    <Link to="/signup" style={{alignContent: "center"}}>
                            <Button 
                            onClick={() => {this.userInformation()}}
                            variant="outline-primary"
                            style={{margin: "4px"}}
                            > Create Account</Button>
                    </Link>
                </Form.Group>
                </Form>
            </Container>
        )}
}

export default RCSignUp