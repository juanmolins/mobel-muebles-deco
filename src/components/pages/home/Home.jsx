import React from "react";
import HomeCarousel from "./homeCarousel/HomeCarousel";
import HomeAcercaDe from "./homeAcercaDe/HomeAcercaDe";
import SillaGris from "../../common/sillaGris/SillaGris";
import HomeDudasFrecuentes from "./homeDudasFrecuentes/HomeDudasFrecuentes";
import HomeAsiTrabajamos from "./homeAsiTrabajamos/HomeAsiTrabajamos";
import HomeProveedores from "./homeProveedores/HomeProveedores";
import HomeComentarios from "./homeComentarios/HomeComentarios";
import HomeProyectos from "./homeProyectos/HomeProyectos";
import { message, phoneNumber } from "../../common/whatsapp";
import Whatsapp from "../../layout/Whatsapp";
import Contacto from "../../layout/contacto/Contacto";
import Mapa from "../../layout/mapa/Mapa";

const Home = () => {
  return (
    <main className="homeContainer">
      <HomeCarousel />
      <HomeAcercaDe />
      <HomeAsiTrabajamos />
      <HomeProveedores />
      <HomeProyectos />
      <HomeComentarios />
      <SillaGris phoneNumber={phoneNumber} message={message} />
      <HomeDudasFrecuentes />
      <Contacto />
      <Mapa />
      <Whatsapp phoneNumber={phoneNumber} message={message} />
    </main>
  );
};

export default Home;
