import React from "react";
import { Navcontextprovider } from "./context/navcontext";
import 'react-toastify/dist/ReactToastify.css';
import { ModalContextProvider } from "./context/modalContext";
import { Usercontextprovider } from "./context/userContext";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import Navbar from "./components/app/navbar";
import Modal from "./modal";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Retroalimentacion from "./pages/Retroalimentacion";
import Juegos from "./pages/Juegos";
import Tema from "./pages/Temas";
import Categoria from "./pages/Categoria";
import Ususarios from "./pages/Ususarios";
import Page1 from "./Pagefront/Page1";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
      <ModalContextProvider>

        <Usercontextprovider>
          <Navcontextprovider>

          <Routes>
      <Route path="Page1" element={<Home />} />
      <Route path="Register" element={<Register />} />
                <Route path="login" element={<Login />} />
               

                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Navbar />
                    </ProtectedRoute>
                  }
                >
                 
                  <Route path="home" element={<Home />} />
                  <Route path="Juegos" element={<Juegos />} />
                  <Route path="Tema" element={<Tema />} />
                  <Route path="Categoria" element={<Categoria />} />
                  <Route path="Retroalimentacion" element={<Retroalimentacion />} />
                 
                  <Route path="usuarios" element={<Ususarios />} />
                </Route>
              </Routes>
              <Modal />
          </Navcontextprovider>
        </Usercontextprovider>
        </ModalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
