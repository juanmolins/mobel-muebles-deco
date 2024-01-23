import { Route, Routes } from "react-router-dom";
import Rutas from "./Rutas";
import Home from "../components/pages/home/Home";
import MueblesAMedida from "../components/pages/mueblesALaMedida/MueblesAMedida";

import Decoracion from "../components/pages/decoracion/Decoracion";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Rutas />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/mueblesAMedida"} element={<MueblesAMedida />} />
        <Route path={"/decoracion"} element={<Decoracion />} />
      </Route>
      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
