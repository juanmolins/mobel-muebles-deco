import React from "react";
import {
  Facebook,
  Instagram,
  LocalPhoneSharp,
  Place,
  WhatsApp,
} from "@mui/icons-material";
import { phoneNumber, message } from "../../common/whatsapp";
import Formulario from "./Formulario";


import { useState } from "react";

const Contacto = () => {
  

  return (
    <article className="contacto" id="contacto">
      <header>
        <h2 className="secondaryTitle">Contactános</h2>
      </header>

      <section className="contactoInfo">
        <div className="contactoInfoData">
          <Place
            fontSize="large"
            color="white"
            sx={{
              backgroundColor: "#db0809",
              borderRadius: "25px",
              padding: "0.2rem",
            }}
          />
          <p>Prudencio Bustos 286 - Alta Gracia - Cba - CP5186</p>
        </div>
        <div className="contactoInfoData">
          <LocalPhoneSharp
            fontSize="large"
            color="white"
            sx={{
              backgroundColor: "#db0809",
              borderRadius: "25px",
              padding: "0.2rem",
            }}
          />
          <p> +54-9-3547-460196 </p>
        </div>
        <div className="contactoInfoRedes">
          <a
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
            target="_blank"
          >
            <WhatsApp fontSize="large" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100026160046799"
            target="_blank"
          >
            <Facebook fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com/mobel_muebles_y_deco/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            target="_blank"
          >
            <Instagram fontSize="large" />
          </a>
        </div>
      </section>
      <section className="contactoFormularioContainer">
      < Formulario />  
      </section>
    </article>
  );
};

export default Contacto;
