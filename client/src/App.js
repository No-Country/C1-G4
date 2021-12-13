import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Admin from "./pages/Admin.jsx";
//Especialidades
import Especialidades from "./pages/especialidades/Especialidades.jsx";
import AgregarEsp from "./pages/especialidades/AgregarEsp";
import EditarEsp from "./pages/especialidades/EditarEsp.jsx";
//Medicos
import Medicos from "./pages/medicos/Medicos.jsx";
import AgregarMed from "./pages/medicos/AgregarMed.jsx";
import EditarMed from "./pages/medicos/EditarMed.jsx";
//Usuarios
import Usuarios from "./pages/usuarios/Usuarios.jsx";
import AgregarUsr from "./pages/usuarios/AgregarUsr.jsx";
import EditarUsr from "./pages/usuarios/EditarUsr.jsx";
import CambiarPass from "./pages/usuarios/CambiarPass.jsx";
//Administradores
import Administradores from "./pages/administradores/Administradores.jsx";
import AgregarAdm from "./pages/administradores/AgregarAdm.jsx";
import EditarAdm from "./pages/administradores/EditarAdm.jsx";

//import userActions from "./redux/actions/userActions";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import Cita from "./components/Cita/Cita.jsx";

//importamos contexto
import { UsuarioContextProvider } from "./context/userContext";

//hooks

const App = () => {

  useEffect(() => {
  }, []);

  return (
    <UsuarioContextProvider>
      <BrowserRouter>
        <Header /> 
        <Home />
        <Carousel />
        <Card />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<Admin />} />
          <Route path="especialidades" element={<Especialidades />} />
          <Route path="especialidades/agregar" element={<AgregarEsp />} />
          <Route path="especialidades/editar/:_id" element={<EditarEsp />} />
          <Route path="medicos" element={<Medicos />} />
          <Route path="medicos/agregar" element={<AgregarMed />} />
          <Route path="medicos/editar/:_id" element={<EditarMed />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="usuarios/agregar" element={<AgregarUsr />} />
          <Route path="usuarios/editar/:_id" element={<EditarUsr />} />
          <Route path="usuarios/cambiar-password" element={<CambiarPass />} />
          <Route path="administradores" element={<Administradores />} />
          <Route path="administradores/agregar" element={<AgregarAdm />} />
          <Route path="administradores/editar" element={<EditarAdm />} />
          <Route path="cita" element={<Cita />} />
        </Routes>
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </UsuarioContextProvider>
  );
};

export default App;
