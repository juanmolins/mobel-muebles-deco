import React from "react";

const HomeProveedores = () => {
  return (
    <article className="homeProveedores">
      <header>
        <h2 className="secondaryTitle">Nuestros proveedores</h2>
      </header>
      <section className="homeProveedoresImgContainer">
        <img
          src="https://res.cloudinary.com/drez01kou/image/upload/v1704923907/mobel-deco/proovedores/smal2vlo493ffgoljbkc.png"
          alt="nuestros proveedores"
          className="homeProveedoresImgSm"
        />
        <img
          src="https://res.cloudinary.com/drez01kou/image/upload/v1704923911/mobel-deco/proovedores/v9ybckbopxpumwvjdxb5.png"
          alt="nuestros proveedores"
          className="homeProveedoresImgMd"
        />
      </section>
    </article>
  );
};

export default HomeProveedores;
