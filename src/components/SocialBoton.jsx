import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

/* los nombres de los iconos deben ser pasados como Props desde Registro */

const SocialBoton = () => {        

    return (
        <>
            <h2>Crea una cuenta</h2>
            <div className='socialBtn mb-1'>                
                <FaFacebook />
                <FaGithub />
                <FaLinkedin />
            </div>
            <p>o usa Tu email para registrarte</p>
        </>
    );
};

export default SocialBoton;