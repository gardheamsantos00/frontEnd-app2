import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './auth';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Registro from './pages/Registro';
import Professores from './pages/Professores';
import Orientacoes from './pages/Orientacoes';
import CadProfessor from './pages/CadProfessor';
import CadOrientacao from './pages/CadOrientacao';


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/home" component={Dashboard} />
            <Route path="/" component={Dashboard} />
            <Route path="/registre-se" component={Registro} />
            <PrivateRoute path="/professores" component={Professores}/>
            <PrivateRoute path="/orientacoes" component={Orientacoes} />
            <PrivateRoute path="/cadProfessor" component={CadProfessor}/>
            <PrivateRoute path="/cadOrientacao" component={CadOrientacao}/>
        </Switch>
    </Router>
);

export default Routes;