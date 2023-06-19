import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminComponent = () => {
  const [expandir, setExpandir] = useState(false);
  const [expandir1, setExpandir1] = useState(false);
  const [expandir2, setExpandir2] = useState(false);

  return (
    <Master>
      <section>
        <h2>Dashboard</h2>
        <Linkes to="/home">
          <img src="src\img\casa.png" alt="" /> Home
        </Linkes>

        <h2>Juegos</h2>
        <Linkes to="/Juegos">
          <img src="src\img\casa.png" alt="" /> Juegos
        </Linkes>
        <h2>Categorias</h2>
        <Linkes to="/Categoria">
          <img src="src\img\casa.png" alt="" /> Categorias
        </Linkes>
        <h2>Temas</h2>
        <Linkes to="/Tema">
          <img src="src\img\casa.png" alt="" /> Temas
        </Linkes>
        <h2>Retroalimentacion</h2>
        <Linkes to="/Retroalimentacion">
          <img src="src\img\casa.png" alt="" /> Retroalimentacion
        </Linkes>
        <h2>Registro Usuarios</h2>
        <Linkes to="/usuarios">
          <img src="src\img\user.png" alt="" />
          Usuarios
        </Linkes>
      </section>
    </Master>
  );
};

export default AdminComponent;

export const Master = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  background-color: #023047;
  & > div {
    display: flex;
    justify-content: center;
    background-color: #187b61;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 3em 2em;
    & img {
      width: 3em;
    }
    & h2 {
      padding: 0 0 0 4em;
    }
  }
  & > section {
    width: 100%;
    height: auto;
  }
  & h2 {
    font-weight: 100;
    font-size: 0.7em;
    text-transform: uppercase;
    color: #fff;
    padding: 0 1.5em;
    background-color: transparent;
    margin: 1em 1.5em;
    &:nth-child(1) {
      margin-top: 10em;
    }
  }
  & > article {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    & h1 {
      color: #fff;
      text-align: center;
      font-weight: 100;
      background-color: transparent;
      padding: 0.5em 0 1em 0em;
    }
    & img {
      width: 2em;
      padding: 2em 0;

      filter: invert(100%);
      background-color: transparent;
    }
  }
`;
export const Linkes = styled(Link)`
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  padding: 0.8em 3.8em;
  gap: 1em;

  &:hover {
    color: #fff;
    background-color: rgb(48, 65, 75);
  }
  & img {
    width: 25px;
    filter: invert(100%);
  }
`;

export const Divbotton = styled.div`
  color: #02d08f;
  font-size: 0.9em;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 3.6em;
  & article {
    width: 100%;
    position: relative;
    margin-top: 1em;
    &::before {
      position: absolute;
      content: "";
      background-color: #127369;
      width: 2px;
      height: 95%;
      left: 2em;
    }
  }
  & section {
    display: flex;
    gap: 1em;

    & img {
      filter: invert(100%);
      width: 1.3em;
    }
  }
`;
