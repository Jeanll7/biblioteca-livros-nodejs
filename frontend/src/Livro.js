import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

function Livro() {
  const [nome, setNome] = useState();
  const [valorDiaria, setValorDiaria] = useState();

  function cadastrarAluguel() {}

  return (
    <div className="container">
      <h3>livro</h3>
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
            setValorDiaria(e.target.value);
          }}
          value={valorDiaria}
          placeholder="valor diária"
          type="number"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button variant="primary" onClick={cadastrarAluguel}>
        Cadastrar
      </Button>
    </div>
  );
}

export default Livro;
