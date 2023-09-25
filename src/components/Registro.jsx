import Formulario from "./Formulario";
import SocialBoton from "./SocialBoton";

const social = [
    {
        icon: "FaFacebook",
        url: "https://www.facebook.com",
    },
    {
        icon: "FaGithub",
        url: "https://github.com/login",
    },
    {
        icon: "FaLinkedin",
        url: "https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin",
    },
];
const Registro = () => {
    return (
        <div className="registro">
                    <SocialBoton
                        iconos = {social}
                    />   
            <Formulario />                       
        </div>
    );
};

export default Registro;