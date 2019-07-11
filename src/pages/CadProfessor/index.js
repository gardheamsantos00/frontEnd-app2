import React, {Component} from 'react';
import Header from '../../components/Header';
import NavbarCuston from '../../components/Navbar';
import {Container, Row, Card, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';

export default class CadProfessor extends Component {

    render() {
        return (
            <div>
                <NavbarCuston />
                <Header title=" Novo Professor "/>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12">
                                
                                <Card >

                                <Form>
                                <FormGroup>
                                        <Label for="nome">Informe o nome completo do professor</Label>
                                        <Input type="text" name="nome" id="nome"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <Button outline color="success">Cadastrar</Button>{' '}
                                    </FormGroup>
                                </Form>
                                    
                                </Card>
                        </Col>
                    </Row>    
                </Container>
                
            </div>
        );
    }
}