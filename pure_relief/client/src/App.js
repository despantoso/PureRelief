import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Shelter from "./views/Shelter/ShelterInventory"
import Login from "./views/Login/Login"
import { Container } from 'react-bootstrap';
import Request from "./views/ReliefCompany/ReliefCompanyRequest"
import Donations from "./views/ReliefCompany/ReliefCompanyDonations"
import Inventory from "./views/Shelter/ShelterInventory"
import Requests from "./views/Shelter/ShelterRequests"
import SignUp from "./views/SignUp/SignUp"
import ShelterLogin from './views/Login/ShelterLogin';
import RCLogin from './views/Login/RCLogin';
import ShelterSignUp from './views/SignUp/ShelterSignUp'




const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/ReliefCompany/Requests" component={Request} />
        <Route exact path="/ReliefCompany/Donations" component={Donations} />
        <Route exact path="/" component={ShelterLogin} />
        <Route exact path="/Login/ShelterLogin" component={ShelterLogin}/>
        <Route exact path="/Login/RCLogin" component={RCLogin}/>
        <Route exact path="/ShelterSignUp" component={ShelterSignUp}/>
        <Route exact path="/Shelter/Inventory" component={Inventory}/>
        <Route exact path="/Shelter/Requests" component={Requests}/>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
