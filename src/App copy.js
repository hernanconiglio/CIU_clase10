import './App.css';
import Header from './components/Header'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {


  

  //Generar un hook de estado vacio con los diferentes clientes de la veterinaria
  const [clientes, editarClientes] = useState([]);

// Funcion que tome los clientes actuales y agregue el nuevo
  const agregarCliente = (socio) => {
    editarClientes([
      ...clientes,
      socio
    ])
  };


  return (
    <Fragment>
      <Header />
      <Container>
        <Row>
          <Col><h1 id="titulo">Registrate para recibir nuestro catálogo en forma mensual</h1></Col>
        </Row>
        <Row>
          <Col>
            <Formulario 
              agregarCliente={agregarCliente}
            />
          </Col>
          <Col>
            <h2>Listado de clientes</h2>
            {clientes.map((cliente, index) => (
              <ul key={index}>
                <li>Nombre: {cliente.nombre} / email: {cliente.email}</li>
              </ul>
            ))}

          </Col>
        </Row>
    </Container>
    </Fragment>
  );
}

export default App;
