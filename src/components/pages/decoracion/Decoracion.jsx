import DecoracionHeader from "./decoracionHeader/DecoracionHeader";
import DecoracionIconos from "./decoracionIconos/DecoracionIconos";
import DecoracionGaleria from "./decoracionGaleria/DecoracionGaleria";
import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { phoneNumber, message } from "../../common/whatsapp";
import Whatsapp from "../../layout/Whatsapp";
import Contacto from "../../layout/contacto/Contacto";
import Mapa from "../../layout/mapa/Mapa";

function Decoracion() {
  return (
    <main className="decoracionContainer">
      <DecoracionHeader />
      <DecoracionIconos />
      <DecoracionGaleria />
      <section className="decoracionContacto">
        <IconButton
          color="secondary"
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
          target="_blank"
        >
          <WhatsApp />
          <p>Consulta disponibilidad</p>
        </IconButton>
      </section>
      <Contacto />
      <Mapa />
      <Whatsapp phoneNumber={phoneNumber} message={message} />
    </main>
  );
}

export default Decoracion;
