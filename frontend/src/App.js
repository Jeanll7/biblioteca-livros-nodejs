import { useEffect, useState } from "react";
import { Button, Form, Modal, Table, DropdownButton } from "react-bootstrap";
import api from "./service/api";
import moment from "moment";

function App() {
  const [show, setShow] = useState(false);
  const [livros, setLivros] = useState([]);
  const [clientes, setClientes] = useState([]);

  const [clienteId, setClienteId] = useState();
  const [livroId, setLivroId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function cadastrarAluguel() {
    console.log({ clienteId: clienteId, livroId: livroId });
    await api
      .post("/aluguel", {
        clienteId: parseInt(clienteId),
        livroId: parseInt(livroId),
      })
      .then((response) => {
        getAluguels();
      });
    setShow(false);
  }

  const [aluguels, setAlguels] = useState([]);

  async function getAluguels() {
    await api
      .get("/aluguel")
      .then((response) => {
        setAlguels(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getAluguels();
    getClientes();
    getLivros();
  }, []);

  async function getClientes() {
    await api.get("/cliente").then((response) => {
      setClientes(response.data);
    });
  }

  async function getLivros() {
    await api.get("/livro").then((response) => {
      setLivros(response.data);
    });
  }

  async function excluirAluguel() {
    await api
      .delete(`/aluguel/:id`)
      .then(() => {
        getAluguels();
        alert("aluguel excluido");
      })
      .catch((e) => {
        alert("falha na exclusao");
      });
  }

  return (
    <div className="container">
      <div className="botoes">
        <DropdownButton id="dropdown-basic-button" title="Cliente" size="sm">
          <Form.Select
            onChange={(e) => {
              setClienteId(e.target.value);
            }}
            value={clienteId}
            aria-label="Default select example"
          >
            {clientes.map((c) => {
              return <option value={c.id}>{c.nome}</option>;
            })}
          </Form.Select>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Livro" size="sm">
          <Form.Select
            onChange={(e) => {
              setLivroId(e.target.value);
            }}
            value={livroId}
            aria-label="Default select example"
          >
            {livros.map((l) => {
              return <option value={l.id}>{l.nome}</option>;
            })}
          </Form.Select>
        </DropdownButton>

        <Button variant="primary gap-2" size="sm" onClick={handleShow}>
          Cadastrar aluguel
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Livro</th>
            <th>Cliente</th>
            <th>Data</th>
            <th>Retorno</th>
            <th>Di??ria</th>
            <th>Valor Final</th>
            <th>A????o</th>
          </tr>
        </thead>
        <tbody>
          {aluguels.map((a) => {
            return (
              <tr>
                <td>{a.Livro.nome}</td>
                <td>{a.Cliente.nome}</td>
                <td>{moment(a.data).format("DD/MM/YYYY")}</td>
                <td>
                  {a.dataDevolucao &&
                    moment(a.dataDevolucao).format("DD/MM/YYYY")}
                </td>
                <td>R$ {a.Livro.valorDiaria}</td>
                <td>R$ {a.valorArrecadado}</td>
                <td>
                  <Button
                    size="sm"
                    onClick={() => excluirAluguel(a.aluguel.id)}
                  >
                    x
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            onChange={(e) => {
              setClienteId(e.target.value);
            }}
            value={clienteId}
            aria-label="Default select example"
          >
            {clientes.map((c) => {
              return <option value={c.id}>{c.nome}</option>;
            })}
          </Form.Select>
          <Form.Select
            onChange={(e) => {
              setLivroId(e.target.value);
            }}
            value={livroId}
            aria-label="Default select example"
          >
            {livros.map((v) => {
              return <option value={v.id}>{v.nome}</option>;
            })}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={cadastrarAluguel}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
