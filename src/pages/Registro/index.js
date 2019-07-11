import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col,
     Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Registro extends Component {


  render() {
    return (
      <div className="app flex-row align-items-center" style={{backgroundColor:'black'}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1 className="align-items-center">Registre-se !</h1>
                    <p className="text-muted">Crie sua conta</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Nome de usuário" autoComplete="username" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Senha" autoComplete="new-password" />
                    </InputGroup>

                    <Button color="success" block>Criar Conta</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Registro;
