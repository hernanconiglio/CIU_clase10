import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

const Formulario = ({agregarCliente}) => {

    //Creo un socio vacio y lo inicializo con un hook de estado
    const [socio, editarSocio] = useState({
        nombre: "",
        dni: "",
        email: ""
    });

    // Extraigo los valores del socio
    const { nombre, dni, email } = socio;

    //Creo otro hook de estado para el mensaje de error
    const [error, setError] = useState(false);

    // Recogemos lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name]: e.target.value
        });
        console.log("Tomo los datos...");
    };

    // Cuando el usuario presiona el boton
    const submitForm = (e) => {
        e.preventDefault();
    //    console.log("Enviado");

        // Validar el formulario
        if(nombre.trim() === "" || dni.trim() === "" || email.trim() === ""){
            setError(true);
            return;
        }

        //Mensaje de error
        setError(false);
        //Poner un id
        socio.id = uuid();
        console.log(socio);
        //Guardar el socio
        agregarCliente(socio);

        // Reiniciar el form
        editarSocio({
            nombre: "",
            dni: "",
            email: ""
        });

        // Pasarlo al action


    };


    return (
        <Fragment>
            <Form onSubmit={submitForm}>
                <br></br>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Nombre Completo" 
                    name="nombre"
                    onChange={handleChange}
                    value={nombre}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>DNI</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Sin puntos ni espacios" 
                    name="dni"
                    onChange={handleChange}
                    value={dni}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Ingrese su email" 
                    name="email" 
                    onChange={handleChange}
                    value={email}/>
            </Form.Group>
            <br></br>
            <Button 
                variant="success" 
                type="submit">
                Registrarme
            </Button>
            </Form>
            {
                error 
                ? <h4>Todos los campos son obligatorios</h4> 
                : null
            }
        </Fragment>

    );
};

export default Formulario;
