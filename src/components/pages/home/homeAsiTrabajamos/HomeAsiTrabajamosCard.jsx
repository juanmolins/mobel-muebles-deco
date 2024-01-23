import React from "react";

const HomeAsiTrabajamosCard = ({ title, icon, text, className }) => {
  return (
    <div className={className}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default HomeAsiTrabajamosCard;
