const HomeComentariosCard = ({ title, img, text1, text2 }) => {
  return (
    <div className="homeComentariosCard">
      <img src={img} alt={title} />
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};

export default HomeComentariosCard;
