import React, { useState } from "react";
import Formulario from "./Formulario";
import SocialBoton from "./SocialBoton";
import Alerta from "./Alerta";

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
    const [dataAlerta, setDataAlerta] = useState({ color: " ", mensaje: " " });

    return (
        <div className="registro">
            <SocialBoton iconos={social} />
            <Formulario setDataAlerta={setDataAlerta} />
            <Alerta color={dataAlerta.color} mensaje={dataAlerta.mensaje} />
        </div>
    );
};

export default Registro;
