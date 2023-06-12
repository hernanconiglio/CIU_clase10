import './App.css';
import Header from './components/Header'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cliente from './components/Cliente';

function App() {


  //Iniciamos nuestro local storage
  let clientesGuardados = JSON.parse(localStorage.getItem('clientes'));
  if(!clientesGuardados) {
    clientesGuardados = [];
  };


  //Generar un hook de estado vacio con los diferentes clientes de la veterinaria
  const [clientes, editarClientes] = useState([]);

  // hook de useEffect para realizar ciertas operaciones cuando el state cambia o alguna variable cambia
  useEffect(() => {
    //algo cambio
    if(clientesGuardados) {
      localStorage.setItem('clientes', JSON.stringify(clientes));
    }
    else {
      localStorage.setItem('clientes', JSON.stringify([]));
    }
  }, [clientesGuardados]);


// Funcion que tome los clientes actuales y agregue el nuevo
  const agregarCliente = (socio) => {
    editarClientes([
      ...clientes,
      socio
    ])
  };

  //Función para borrar cliente
  const borrarCliente = (id) => {
    const nuevosClientes = clientes.filter(cliente => cliente.id !== id);
    editarClientes(nuevosClientes);
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
            { //acá implemento operador ternario para mostrar el listado de clientes
              clientes.length > 0 ? 
                <h3>Listado de Clientes</h3> 
                : <h3>No hay clientes</h3>
            }
            {
              clientes.map(
                cliente => 
                  <Cliente
                    key={cliente.id}
                    cliente={cliente}
                    borrarCliente={borrarCliente}
                  />
              )
            }
          </Col>
        </Row>
    </Container>
    </Fragment>
  );
}

export default App;
