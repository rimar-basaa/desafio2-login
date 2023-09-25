import Alert from 'react-bootstrap/Alert';

function Alerta({color, mensaje}) {

  return (
    <Alert variant={color}>
      <p>{mensaje}</p>
    </Alert>
  );
};

export default Alerta;