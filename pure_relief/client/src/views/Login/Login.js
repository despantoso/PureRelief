import React from 'react'
import {Form, Button, Card, Container, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap'

class Login extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container style={{ background: "white-smoke", borderRadius: "5px", color: "black", boxShadow: "2px", border:"black"}}>
            <br/>
            <br/>
            <h3 style={{ textAlign: "center" }}></h3>
            <Form className="login-box">
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="userName" placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        )
    }
}
export default Login