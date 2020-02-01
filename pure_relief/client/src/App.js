import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Shelter from "./views/Shelter/Shelter"
import ReliefCompany from "./views/ReliefCompany/ReliefCompany"


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/ReliefCompany" component={ReliefCompany} />
        <Route exact path="/Shelter" component={Shelter}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
