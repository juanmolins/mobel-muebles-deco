import { WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { phoneNumber, message } from "../../common/whatsapp";

const SillaGris = () => {
  return (
    <article className="sillaGris">
      <section className="sillaGrisImgContainer">
        <img
          src="https://res.cloudinary.com/drez01kou/image/upload/v1704395635/mobel-deco/gchtyh3n426xuyehuf0o.png"
          alt="silla gris"
        />
      </section>
      <section className="sillaGrisTextoContainer">
        <h2 className="sillaGrisTextoTitle">
          ¿Otro tipo de proyecto en mente?
        </h2>
        <p>
          Estamos para satisfacer tus necesidades y acompañarte en todo el
          proceso
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
          target="_blank"
        >
          <Button
            variant="contained"
            size="small"
            startIcon={<WhatsApp />}
            color="secondary"
          >
            Habla con nosotros
          </Button>
        </a>
      </section>
    </article>
  );
};

export default SillaGris;
