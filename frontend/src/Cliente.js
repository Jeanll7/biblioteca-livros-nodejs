import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

function Cliente() {
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();

  function cadastrarAluguel() {}

  return (
    <>
      <div className="container">
        <h3>Cliente</h3>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => {
              setNome(e.target.value);
            }}
            value={nome}
            placeholder="nome"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => {
              setCpf(e.target.value);
            }}
            value={cpf}
            type="number"
            placeholder="CPF"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="primary" onClick={cadastrarAluguel}>
          Cadastrar
        </Button>
      </div>
    </>
  );
}

export default Cliente;
