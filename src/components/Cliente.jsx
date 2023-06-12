import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from "react-bootstrap";


const Cliente = ({cliente, borrarCliente}) => {
    return (
        <Fragment>
            <Badge variant="secondary">
                <p>Nombre: {cliente.nombre}</p>
                <p>DNI: {cliente.dni}</p> 
                <Button 
                    variant="light"
                    onClick={() => borrarCliente(cliente.id)}
                    >Borrar
                </Button>
            </Badge>
        </Fragment>

    );
}

export default Cliente;