import MueblesAMedidaArticle from "./mueblesAMedidaArticle/MueblesAMedidaArticle";
import SillaGris from "../../common/sillaGris/SillaGris";
import { mueblesAMedidaCarouselesData } from "./mueblesAMedidaCarouselesData";
import MueblesAMedidaHeader from "./MueblesAMedidaHeader/MueblesAMedidaHeader";
import { message, phoneNumber } from "../../common/whatsapp";
import Whatsapp from "../../layout/Whatsapp";
import MueblesALaMedidaIconos from "./mueblesALaMedidaIconos/MueblesALaMedidaIconos";
import Contacto from "../../layout/contacto/Contacto";
import Mapa from "../../layout/mapa/Mapa";

const MueblesAMedida = () => {
  return (
    <main className="mueblesAMedida">
      <MueblesAMedidaHeader />
      <MueblesALaMedidaIconos />
      {mueblesAMedidaCarouselesData.map((el) => (
        <MueblesAMedidaArticle
          key={el.id}
          id={el.id}
          title={el.title}
          text={el.text}
          images={el.images}
          alt={el.alt}
        />
      ))}
      <SillaGris />
      <Contacto />
      <Mapa />
      <Whatsapp phoneNumber={phoneNumber} message={message} />
    </main>
  );
};

export default MueblesAMedida;
