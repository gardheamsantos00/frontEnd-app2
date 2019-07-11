import React, {Component} from 'react';
import Header from '../../components/Header';
import NavbarCuston from '../../components/Navbar';
import {Container, Row, Card, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';

import axios from 'axios';

export default class CadProfessor extends Component {

    url = 'http://localhost:3333/professors';

    state = {
        professors: [],
    }

    componentDidMount(){
        axios.post(this.url)
            .then(res =>{
                console.log(res);
                this.setState({ professors: res.data });
            })
    }


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