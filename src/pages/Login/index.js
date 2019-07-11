import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, 
    CardGroup, Col, Container, Form, Input, InputGroup,  Row , Alert} from 'reactstrap';

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
        message : this.props.location.state ? this.props.location.state.message: '',
    };
}

    signIn = () => {
      const data = { email: this.email, password: this.password };

      const requestInfo = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
      };

      fetch('http://127.0.0.1:3333/login', requestInfo)
      .then(response => {

          console.log(requestInfo);
          if(response.ok) {
              return response.json()
          }
          throw new Error("Login inválido...");
      })
      .then(data => {
          localStorage.setItem('token', data.token);
          console.log(data);
          this.props.history.push("/home");
          return;
      })
      .catch(e => {
          this.setState({ message: e.message });
      }); 
    }


  render() {
    return (
      <div className="app flex-row align-items-center" style={{backgroundColor: 'black'}}>
        <Container >
          <Row className="justify-content-center">
            <Col md="8">
              
              
              <CardGroup>
                
                <Card className="p-4 loginIten">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Logue com sua conta</p>
                      {
                        this.state.message !== '' ? (
                          <Alert color="danger" className="text-center"  >
                             {this.state.message} </Alert>) 
                             
                             : '' 
                      }
                      <InputGroup className="mb-3">
                      
                        <Input type="email" placeholder="Email" 
                         required  onChange={e => this.email = e.target.value} />
                      </InputGroup>
                      
                      <InputGroup className="mb-4">
                      
                        <Input type="password" placeholder="Password" 
                         required  onChange={e => this.password = e.target.value} />
                      </InputGroup>
                      
                      <Row>
                        <Col xs="12">
                          <Button color="primary" block 
                          className="px-4" onClick={this.signIn}>Login</Button>
                        </Col>
                      </Row>

                    </Form>
                  </CardBody>
                </Card>


                <Card className="loginIten text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Registar-se</h2>
                      <p>Sistema de Gestão de Orientações da UTFPR-CP! Created By Gardhean Santos</p>
                      <Link to="/registre-se">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Registre-se Agora!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>


              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

