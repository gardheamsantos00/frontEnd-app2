import React, {Component} from 'react';
import Header from '../../components/Header';
import NavbarCuston from '../../components/Navbar';
import { Table, Button, Container,Row } from 'reactstrap'
import { Link } from 'react-router-dom';

export default class Orientacoes extends Component {

    render() {
        return (
            <div  className="app flex-row align-items-center" >
                
                <NavbarCuston />
                <Header title="Lista de orientações"/>

                <Container>

                    <Link to="/cadOrientacao">
                         <Button outline color="success">Novo Orientação</Button>{' '}
                    </Link>
                    <hr/>
                    <Row className="justify-content-center"> 
                       

                        <Table size="sm">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome da Orientação</th>
                                    <th>Professor responsável </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>professor</td>

                                </tr>
                                
                                </tbody>
                            </Table>
                    </Row>
                    
                </Container>
                

            </div>
        );
    }
}