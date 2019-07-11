import React, {Component} from 'react';
import Header from '../../components/Header';
import NavbarCuston from '../../components/Navbar';
import { Table, Button, Container,Row } from 'reactstrap'
import { Link } from 'react-router-dom';

import axios from 'axios';

export default class Professores extends Component {

    url = 'http://localhost:3333/professors';

    state = {
        professors: [],
    }

    componentDidMount(){
        axios.get(this.url)
            .then(res =>{
                console.log(res);
                this.setState({ professors: res.data });
            })
    }
    render() {
        return (
            <div  className="app flex-row align-items-center" >
                
                <NavbarCuston />
                <Header title="Lista de professores"/>

                <Container>

                    <Link to="/cadProfessor"> 
                        <Button outline color="success">Novo Professor</Button>{' '}
                    </Link>
                    <hr/>
                    <Row className="justify-content-center"> 
                       
                    
                        <Table size="sm">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome do Professor </th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                {
                                    this.state.professors.map(prof => 
                                    <tr>
                                        <th scope="row">{prof._id}</th>
                                        <td>{prof.nome}</td>
                                    </tr> )
                                }
                                
                                
                                </tbody>
                            </Table>
                    </Row>
                    
                </Container>
                

            </div>
        );
    }
}