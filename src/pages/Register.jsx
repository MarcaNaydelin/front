import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa el componente correcto para el enlace

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const [apellido, setApellido] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const enviar = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        email: email,

        password: password,
        password_confirmation: password_confirmation
      }),
    });

    const respuesta = await response.json();
    if (respuesta.status === 1) {
      setNombre("");
      setEmail("");
  
      setApellido("");
      setPassword("");
      setPassword_confirmation("");
    }
  };

  return (
    <Abody>
      <section>
        <article>
          <h1>Registrate</h1>
          <p>Si no tienes una cuenta por favor regístrate</p>
          <form>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Ingrese el apellido"
              value={apellido}
              onChange={(e) => {
                setApellido(e.target.value);
              }}
            />

            <input
              type="email"
              placeholder="Ingrese el Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
    

            <input
              type="text"
              placeholder="Ingrese la contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Verificación de contraseña"
              value={password_confirmation}
              onChange={(e) => {
                setPassword_confirmation(e.target.value);
              }}
            />
            <button onClick={enviar}>Registrar</button>
          </form>
          <Link to="/Login">Volver</Link>
        </article>
      </section>
    </Abody>
  );
}

export default Register;

const Abody = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  background-image: url("https://previews.123rf.com/images/brgfx/brgfx1705/brgfx170500521/78180447-ni%C3%B1os-y-n%C3%BAmeros-en-la-ilustraci%C3%B3n-de-papel.jpg");
  object-fit: cover;
  background-repeat: repeat;
  background-size: 100%;

  & > section {
    box-shadow: 0 0 6px 1px #0002;
    z-index: 2;
    & > div {
      width: 20%;
      background-color: rgb(99, 131, 250);
      height: 100%;
      border-radius: 2em 0 0 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      position: relative;
      overflow: hidden;

      & h2 {
        color: #fff;
        font-size: 3em;
      }
    }
    width: 68%;
    height: 80%;
    border-radius: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    & article {
      width: 50%;
      background-color: #023047;
      height: 100%;
      border-radius: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      position: relative;

      & img {
        width: 5em;
        height: 5em;
        background-color: transparent;
        box-shadow: 0 0 5px 1px #0002;
        border-radius: 0.7em;
      }
      & h1 {
        font-size: 1.5em;
        font-weight: 100;
        text-transform: uppercase;
      }
      & form {
        width: 60%;
        height: 60%;
        display: flex;
        justify-content: center;

        flex-direction: column;
        & label {
          font-size: 0.8em;
          &::first-letter {
            color: blue;
            font-size: 1.2em;
          }
        }
        & input {
          width: 100%;
          background-color: #fcbf4a;
          border-radius: 0.5em;
          padding: 0.5em 0;
        }
        & button {
          margin-top: 1em;
          width: 100%;
          background-color: rgb(99, 131, 250);
          border: solid 1px #0002;
          padding: 0.5em 0;
          color: #fff;
        }
        gap: 0.8em;
      }
    }
  }
`;
