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
        
        let mensaje = '';
        let color = '';

        switch (true) {
            case nombre === '':
            case correo === '':
            case pass === '':
            case repass === '':
                mensaje = 'Todos los campos son obligatorios';
                color = 'danger';
                break;
            case !/^[A-Za-z\s]+$/.test(nombre):
                mensaje = 'El nombre no debe contener números ni caracteres';
                color = 'danger';
                break;
            case !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(correo):
                mensaje = 'El correo no es válido';
                color = 'danger';
                break;
            case !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]){8,}$/.test(pass):
                mensaje = 'La contraseña debe tener al menos 8 caracteres, 1 número, 1 mayúscula, 1 minuscula';
                color = 'danger';
                setPass('');
                setRepass('');
                break;
            case pass !== repass:
                mensaje = 'Contraseñas son distintas';
                color = 'danger';
                setPass('');
                setRepass('');
                break;
            default:
                mensaje = 'Registro exitoso';
                color = 'success';
                setNombre('');
                setCorreo('');
                setPass('');
                setRepass('');
            break;
        };

        setDataAlerta({ color, mensaje });
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
                variant="primary" 
                type="submit" 
                className="btn mb-3">
                Registrarse
            </Button>
        </Form>
    );
};

export default Formulario;
