import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

const Rutas = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rutas;
