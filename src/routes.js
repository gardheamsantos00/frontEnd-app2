import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
            <Route path="/registre-se" component={Registro} />
            <Route path="/professores" component={Professores}/>
            <Route path="/orientacoes" component={Orientacoes} />
            <Route path="/cadProfessor" component={CadProfessor}/>
            <Route path="/cadOrientacao" component={CadOrientacao}/>
        </Switch>
    </Router>
);

export default Routes;