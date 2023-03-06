import React from "react";
import { InputGroup, Form, Navbar, Nav, Container } from "react-bootstrap";

export const HeaderApp = (props) => {
  return (
    <div>
      <Navbar className="Navbar" bg="dark" variant="dark">
        <Container className="NavInfo">
          <Navbar.Brand href="#home"> Database</Navbar.Brand>

          <Nav>
            <Nav.Link
              href="https://www.jcavitreinamentos.com.br/cursos-programacao?gclid=CjwKCAiAuOieBhAIEiwAgjCvcg6MskGzZYf_f2mICk5EakZcf0JCTIwDR0TKgmORpzFu5EcJFQbh6hoC2JgQAvD_BwE"
              target="_blank"
            >
              JCAVI
            </Nav.Link>
            <Nav.Link href="https://github.com/jeanll7" target="_blank">
              GitHub
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Clientes"
          value={props.pesquisa}
          onChange={(e) => {
            props.setClientes(e.target.value);
          }}
        />
      </InputGroup>
    </div>
  );
};
