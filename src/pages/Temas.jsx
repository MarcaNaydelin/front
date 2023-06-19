import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import { getTemas, deletetema } from "../services/Temas";
import { UseFech } from "../hooks/useFech";
import styled from "styled-components";
import TemaForm from "../models/TemaForm";

const Tema = () => {
  //variable de estado
  // int a =1 {}
  // nombre : hanz,
  const [temaactual, settemaactual] = useState({});
  const { getApi, data: tem } = UseFech(getTemas);
  const { openModal, closeModal } = useModal(
    Object.keys(temaactual).length > 0 ? "Editar tema" : "Agregar tema",
    <TemaForm
      getApi={getApi}
      temaactual={temaactual}
      settemaactual={settemaactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );

  useEffect(() => {
    if (Object.keys(temaactual).length > 0) {
      openModal();
    }
  }, [temaactual]);

  return (
    <Contenido>
      <h1>Temas</h1>
      <table>
        <thead>
          <tr>
            <th data-label="Nº">Nº</th>
            <th data-label="CIUDAD">titulo</th>
            <th data-label="CIUDAD">Descripcion</th>
            <th data-label="ACCIONES">ACCIONES</th>
          </tr>
        </thead>
        {tem.map((v, i) => (
          <tbody key={i}>
            <tr>
              <th data-label="Nº">{i + 1}</th>
              <th data-label="CIUDAD">{v.titulo}</th>
              <th data-label="CIUDAD">{v.descripcion}</th>
              <th data-label="ACCIONES">
                <div>
                  <button
                    onClick={() => {
                      settemaactual(v);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      deletetema(v.id, getApi);
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
    </Contenido>
  );
};

export default Tema;
const Contenido = styled.article`
  & h1 {
    text-align: start;
    font-size:1.5em;
  }
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  font-weight: 100;
  height:80vh;
  & table {
    width:95%;

  background-color: #06405e;

    border-collapse: collapse;
    font-weight: 100;

    & thead {
      border-collapse: collapse;

      & tr {
        background-color: blue;
        border-collapse: collapse;
        color: #fff;
      }
    }
    & tbody {
      background-color: #236daa54;
      & tr {
        border: solid 1px #000;

        & div {
          display: flex;
          flex-direction: column;
          gap: 0.2em;
          & button {
            background-color:#06405e;
            padding: 0.2em 1em;
            border: none;
            border-radius:1em;
            color:#fff;
          }
        }
      }
    }
  }
`;
