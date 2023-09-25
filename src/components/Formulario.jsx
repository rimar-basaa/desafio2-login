import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alerta from './Alerta';

const Formulario = () => {

// --------------------------- useState para almacenar los datos de registro
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRepass] = useState('');

// ---------------------------- useState para almacenar datos para la Alerta
    const [colorError, setColorError] = useState('');
    const [dataError, setDataError] = useState('');    

// ------------------------------------------------- validacion de los input
    const validar = (e) => {
        e.preventDefault();
        if (nombre === '' || correo === '' || pass === '' || repass === '') {
            setDataError('Todos los campos son obligatorios');
            setColorError('danger');            
            return;
        } else if (pass !== repass) {
            setDataError('Contraseñas son distintas');
            setColorError('danger');            
            setPass('');
            setRepass('');            
            return
        } else {
            setDataError('Registro exitoso');
            setColorError('success');            
            setNombre('');
            setCorreo('');
            setPass('');
            setRepass('');                                                
        };                
    };    

    return (
        <Form onSubmit={validar}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control 
                size="sm" 
                type="text" 
                placeholder="Su nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                size="sm" 
                type="email" 
                placeholder="Su correo"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control 
                size="sm" 
                type="password" 
                placeholder="Contraseña"
                onChange={(e) => setPass(e.target.value)}
                value={pass} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRePassword">
                <Form.Control 
                size="sm" 
                type="password" 
                placeholder="Repita su contraseña"
                onChange={(e) => setRepass(e.target.value)}
                value={repass} />
            </Form.Group>

            <Button 
                size="sm" 
                variant="success" 
                type="submit" 
                className="btn mb-3">
                Registrarse
            </Button>


            <Alerta color={colorError} mensaje={dataError} />  {/* este componente NO debe estar aqui. Debe estar en Registro */}
            
        </Form>
    );
};

export default Formulario;