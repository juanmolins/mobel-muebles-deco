import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";
import { phoneNumber, message } from "../../common/whatsapp";

const Navbar = () => {
  let width = window.innerWidth;

  return (
    <header className="headerPrincipal">
      <nav className="navbarDesktop">
        <div
          style={{
            width: "20rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Link className="navbarMenuLink" to="/">
            <img
              alt="logo"
              src="https://res.cloudinary.com/drez01kou/image/upload/v1703792265/mobel-deco/logo/cgnnbcjwnxkvvar9xhvv.png"
            />
          </Link>
        </div>
        <ul className="navbarMenu">
          <li>
            <Link className="navbarMenuLink" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="navbarMenuLink" to="/mueblesAMedida">
              Muebles a medida
            </Link>
          </li>
          <li>
            <Link className="navbarMenuLink" to="/decoracion">
              Decoración
            </Link>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
        <div
          style={{
            width: "20rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
            target="_blank"
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<WhatsAppIcon />}
            >
              Habla con nosotros
            </Button>
          </a>
        </div>
      </nav>

      <MobileNavbar />
    </header>
  );
};

export default Navbar;
