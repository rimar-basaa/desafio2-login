import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialBoton = ({ iconos }) => {
    return (
        <>
            <h2>Crea una cuenta</h2>
            <div className='socialBtn mb-1'>
                {iconos.map((socialItem, index) => (
                    <a key={index} href={socialItem.url} target="_blank" rel="noopener noreferrer">
                        {getIconComponent(socialItem.icon)}
                    </a>
                ))}
            </div>
            <p>o usa tu email para registrarte</p>
        </>
    );
};

// Función auxiliar para obtener el componente de icono correspondiente
function getIconComponent(iconName) {
    switch (iconName) {
        case 'FaFacebook':
            return <FaFacebook />;
        case 'FaGithub':
            return <FaGithub />;
        case 'FaLinkedin':
            return <FaLinkedin />;
        default:
            return null;
    }
}

SocialBoton.propTypes = {
    iconos: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SocialBoton;