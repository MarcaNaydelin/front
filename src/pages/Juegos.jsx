import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import JuegosForm from "../models/JuegosForm";
("../Models/JuegosForm");
import styled from "styled-components";
import { getJuegos, deleteJuego } from "../services/juegos";
import { UseFech } from "../hooks/useFech";

const Juegos = () => {
  const [juegoactual, setJuegoactual] = useState({});
  const { getApi, data: jueg } = UseFech(getJuegos);
  const { openModal, closeModal } = useModal(
    Object.keys(juegoactual).length > 0 ? "Editar juego" : "Agregar juego",
    <JuegosForm
      getApi={getApi}
      juegoactual={juegoactual}
      setJuegoactual={setJuegoactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  useEffect(() => {
    if (Object.keys(juegoactual).length > 0) {
      openModal();
    }
  }, [juegoactual]);

  return (
    <Div>
      <table>
        <thead>
          <tr>
            <th data-label="Nº">Nº</th>
            <th data-label="CIUDAD">nombre juego</th>
            <th data-label="CIUDAD">Descripcion</th>
            <th data-label="CIUDAD">nivel_dificultad</th>
            <th data-label="CIUDAD">puntuacion</th>
            <th data-label="CIUDAD">imagen</th>

            <th data-label="ACCIONES">ACCIONES</th>
          </tr>
        </thead>
        {jueg.map((v, i) => (
          <tbody key={i}>
            <tr>
              <th data-label="Nº">{i + 1}</th>
              <th data-label="CIUDAD">{v.nombre_juego}</th>
              <th data-label="CIUDAD">{v.descripcion}</th>
              <th data-label="CIUDAD">{v.nivel_dificultad}</th>
              <th data-label="CIUDAD">{v.imagen}</th>
              <th data-label="CIUDAD">{v.puntuacion}</th>
              <th data-label="ACCIONES">
                <div>
                  <button
                    onClick={() => {
                      setJuegoactual(v);
                    }}
                  >
                    Editar
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      deleteJuego(v.id, getApi);
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={openModal}> agregar</button>
    </Div>
  );
};

export default Juegos;
export const Div = styled.article`
  width: 90%;
  margin: 2em auto;
  height: 100%;
  background: #11268363;
  & table {
    background: #11268363;
    border-bottom: solid 1px #0002;
    & tr{
padding:1em auto;
    }
    & th{

    }
  }
  & button {
    padding: 0.5em 1em;
    width: 10em;
  }
`;
