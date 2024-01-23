import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";
import { message, phoneNumber } from "../../common/whatsapp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <section className="footerMobel">
          <Link to={"/"}>
            <img
              src="https://res.cloudinary.com/drez01kou/image/upload/v1703792265/mobel-deco/logo/cgnnbcjwnxkvvar9xhvv.png"
              alt="logo"
            />
          </Link>
        </section>
        <section className="footerTextoContainer">
          <p className="footerTexto">
            Estamos convencidos de que la belleza, armonía y funcionalidad
            mejoran la calidad de vida de las personas.
          </p>
        </section>
        <section className="footerRedes">
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
        </section>
      </div>
    </footer>
  );
};

export default Footer;
