import React, {Component} from 'react';
import Header from '../../components/Header';
import NavbarCuston from '../../components/Navbar';
import { Link } from 'react-router-dom';

import { Jumbotron, Button, Card, CardBody, 
    CardGroup, Col, Container, Row } from 'reactstrap';

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <NavbarCuston />
                <Header title=" Painel administrativo !"/>
                <Jumbotron fluid>
                    <Container fluid >
                    <Row className="justify-content-center">
                        <Col md="12">
                            <h1 className="display-3">Bem-Vindo</h1>
                            <p className="lead">Projeto desenvolvido na disciplica de Programação web 2</p>
                            
                            <Link to="/registre-se">
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