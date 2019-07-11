import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

export default class NavbarCuston extends React.Component {
  
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">UTFPR-CP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/professores">Professores</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/orientacoes">Orientações</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Sair</NavLink>
              </NavItem>
                
                
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
