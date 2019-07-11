import React, {Component} from 'react';
import Header from '../../components/Header';
import NavbarCuston from '../../components/Navbar';
import { Link } from 'react-router-dom';

import { Jumbotron, Button, Col, Container, Row } from 'reactstrap';

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        //const token = localStorage.getItem('token');
        
        /*
        fetch('http://localhost:3333/', { 

            headers: new Headers({ 'Authorization': `Bearer ${token}` 
        
        })})
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error("Oops! Ocorreu um erro. :(");
        })
        .then(user => this.setState({ user }))
        .catch(e => console.log(e));
        */
}


    render() {
        return (
            <div>
                <NavbarCuston />
                <Header title=" Painel administrativo !"/>
                <Jumbotron fluid>
                    <Container fluid >
                    <Row className="justify-content-center">
                        <Col md="12">
                            <h1 className="display-3">Bem-Vindo {this.state.user.nome}</h1>
                            <p className="lead">Projeto desenvolvido na disciplica de Programação web 2</p>
                            
                            <Link to="/login">
                                <Button color="primary" className="mt-3" active tabIndex={-1}>Registre-se Agora!</Button>
                             </Link>
                        </Col>
                    </Row>        
                    
                    </Container>
                </Jumbotron>       
            </div>
        );
    }
}