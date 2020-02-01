import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {Form, Button, Card, Container, ButtonGroup, ToggleButton, Row, Col, ButtonToolbar} from 'react-bootstrap'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isReliefOrg: false,
            isReliefOrgString: "Shelter Username"
        }
    }

    userUpdateRO(){
        console.log("Im here")
        this.setState({
            isReliefOrgString: "Relief Organization Username",
            isReliefOrg:true
        })
        console.log(this.state.isReliefOrg)
    }
    userUpdateS(){
        console.log("Im here")
        this.setState({
            isReliefOrgString: "Shelter Username",
            isReliefOrg:false
        })
        console.log(this.state.isReliefOrg)
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
                    <Button onClick={this.userUpdateS.bind(this)} variant="success" size="lg" style={{margin: "4px"}}>Shelters</Button>
                    <br/>
                    <Button onClick={this.userUpdateRO.bind(this)} variant="info" size="lg" style={{margin: "4px"}}>
                        Relief Organization
                    </Button>
                </ButtonToolbar>
                <br/>
                <div className="login-box">
                <Container>
                <Form>
                <h4>Please Sign In or Register</h4>
                <Form.Group controlId="userInformation">
                    <Form.Label>{isReliefOrgString}</Form.Label>
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
                        <Button 
                        onClick={() => {this.userInformation()}}
                        variant="primary" 
                        style={{margin: "4px"}}
                        block
                        >Sign In</Button>
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
export default Login