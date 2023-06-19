import React from 'react'
import { useState, useEffect } from "react";
import {  getTemas } from '../services/Temas';
import { UseFech } from "../hooks/useFech";
import { updateJuego ,postJuego} from '../services/juegos';
import { getCategorias } from '../services/Categorias';
import { getretroalimebntacion } from '../services/Retroalimentacion';

const JuegosForm = ({getApi,juegoactual,setJuegoactual,closeModal

}) => {

  // variable de estado 
  const [nombre_juego, setNombre_juego] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nivel_dificultad, setNivel_dificultad] = useState("");
  const [imagen, setImagen] = useState("");
  const [puntuacion, setPuntuacion] = useState(""); 
  const [id_temas, setId_temas] = useState(""); 
  const {data:tem}=UseFech(getTemas);
  const [id_categorias, setId_categorias] = useState(""); 
  const {data:cat}=UseFech(getCategorias);
  const [id_retroalimentaciones, setId_retroalimentaciones] = useState("");
  const {data:ret}=UseFech(getretroalimebntacion);
  // gestionar cuando va a cambiar el elemento
  useEffect(() => {
    if (Object.keys(juegoactual).length > 0) {
      setNombre_juego(juegoactual.nombre_juego);
      setDescripcion(juegoactual.descripcion);
      setNivel_dificultad(juegoactual.nivel_dificultad);
      setImagen(juegoactual.imagen);
      setPuntuacion(juegoactual.puntuacion);
    }
    return () => {
      setJuegoactual({});
    };
  }, [juegoactual]);

  const updatepost = (e) => {
    // es para que se actualice la pagina 
    e.preventDefault();
    if (Object.keys(juegoactual).length > 0) {
      updateJuego(
        {
          
          id: juegoactual.id,
          id_temas:id_temas,
          id_categorias:id_categorias,
          id_retroalimentaciones:id_retroalimentaciones,
          nombre_juego: nombre_juego,
          descripcion: descripcion,
          nivel_dificultad: nivel_dificultad,
          imagen: imagen,
          puntuacion: puntuacion,
        },
        () => {
          setNombre_juego("");
          setDescripcion("");
          setNivel_dificultad("");
          setImagen("");
          setPuntuacion("");
          setJuegoactual({});
          getApi();
        }
      );
    } else {
      postJuego( nombre_juego,        descripcion,
        nivel_dificultad ,
        imagen,
        puntuacion,
        id_temas,
        id_categorias,
        id_retroalimentaciones, () => {
        setNombre_juego("");
        setDescripcion("");
        setNivel_dificultad("");
        setImagen("");
        setPuntuacion("");
        getApi();
        closeModal();
      });
    }
  };
console.log(nombre_juego);
console.log(descripcion);
console.log(id_temas);
console.log(id_categorias);
console.log(id_retroalimentaciones);
console.log(nivel_dificultad);
console.log(imagen);
console.log(puntuacion);
  return (
    <div>
        <form>
        <div>
          <div>
            <label>escribe nombre del juego:</label>
            <input
              name="nombre_juego"
              type="text"
              value={nombre_juego}
              onChange={(e) => setNombre_juego(e.target.value)}
            />
          </div>
          <div>
            <label>escribe la descripcion:</label>
            <input
              name="Descripcion"
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div>
            <label>escribe el nivel de dificultad:</label>
            <input
              name="nivel_dificultad"
              type="text"
              value={nivel_dificultad}
              onChange={(e) => setNivel_dificultad(e.target.value)}
            />
          </div>
          <div>
            <label>imagen:</label>
            <input
              name="imagen"
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
            {/* buscar atributo html para seleccionar archivos */}
            {/* buscas un convertidor de archivos a texto o string (blob) */}
            {/* asiganar e estado a el dato blobl ( onChange={(e) => setImagen(e.target.value)}) */}
          </div>
          <div>
            <label>puntaje:</label>
            <input
              name="puntuacion"
              type="text"
              value={puntuacion}
              onChange={(e) => setPuntuacion(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="">tema</label>
            <select
              value={id_temas}
              onChange={(e) => setId_temas(e.target.value)} >
                <option value="">Seleccione Tema</option>
              {tem.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.titulo}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">categorias</label>
            <select
              value={id_categorias}
              onChange={(e) => setId_categorias(e.target.value)} >
              {cat.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.nombre_categoria}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">retroalimentacion</label>
            <select
              value={id_retroalimentaciones}
              onChange={(e) => setId_retroalimentaciones(e.target.value)} >
              {ret.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.retroalimentacion}
                </option>
              ))}
            </select>
          </div>
        </div>
        <section>
          <button onClick={(e) => updatepost(e)}>
            {Object.keys(juegoactual).length > 0 ? "Editar" : "Agregar"}
          </button>
        </section>
      </form>
    </div>
  )
}


export default JuegosForm
