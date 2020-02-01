import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Shelter from "./views/Shelter/Shelter"
import Login from "./views/Login/Login"
import { Container } from 'react-bootstrap';
import ReliefCompany from "./views/ReliefCompany/ReliefCompany"
import SignUp from "./views/SignUp/SignUp"



const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route exact path="/ReliefCompany" component={ReliefCompany} />
        <Route exact path="/Shelter" component={Shelter}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
