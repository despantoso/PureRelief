import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Shelter from "./views/Shelter/Shelter"
import Login from "./views/Login/Login"
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Shelter" component={Shelter}/>
        <Route exact path="/Login" component={Login}/>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
