import { Button } from "@mui/material";
import React from "react";
import { message, phoneNumber } from "../../../common/whatsapp";

const HomeCarouselCard = ({ title, text, button }) => {
  return (
    <div className="homeCarouselCard">
      <h2 className="homeCarouselCardTitle">{title}</h2>
      <p className="homeCarouselCardText">{text}</p>
      <a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
        target="_blank"
      >
        <Button variant="contained" color="error" size="small">
          {button}
        </Button>
      </a>
    </div>
  );
};

export default HomeCarouselCard;
