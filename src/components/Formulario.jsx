import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = ({ setDataAlerta }) => {
    // --------------------------- useState para almacenar los datos de registro
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRepass] = useState('');

    // ------------------------------------------------- validacion de los input
    const validar = (e) => {
        e.preventDefault();

        // Validación para nombre: no permitir números
        if (!/^[A-Za-z\s]+$/.test(nombre)) {
            setDataAlerta({ color: 'danger', mensaje: 'El nombre no debe contener números' });
            return;
        }

        // Validación para campos vacíos
        if (nombre === '' || correo === '' || pass === '' || repass === '') {
            setDataAlerta({ color: 'danger', mensaje: 'Todos los campos son obligatorios' });
            return;
        } 
        else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/.test(pass)) {
            setDataAlerta({
                color: 'danger',
                mensaje: 'La contraseña debe tener al menos 8 caracteres, un número, un carácter especial y una mayúscula',
            });
            setPass('');
            setRepass('');
            return;
        }
        else if (pass !== repass) {
            setDataAlerta({ color: 'danger', mensaje: 'Contraseñas son distintas' });
            setPass('');
            setRepass('');
            return;
        }  else {
            setDataAlerta({ color: 'success', mensaje: 'Registro exitoso' });
            setNombre('');
            setCorreo('');
            setPass('');
            setRepass('');
        }
    };

    return (
        <Form onSubmit={validar}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Su nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Su correo"
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRePassword">
                <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Repita su contraseña"
                    onChange={(e) => setRepass(e.target.value)}
                    value={repass}
                />
            </Form.Group>

            <Button
                size="sm"
                variant="success"
                type="submit"
                className="btn mb-3"
            >
                Registrarse
            </Button>
        </Form>
    );
};

export default Formulario;