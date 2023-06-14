import React from 'react'
import { useState, useEffect } from "react";
import { updatetema ,posttema } from '../services/Temas';

const TemaForm = ({getApi,temaactual,settemaactual,closeModal

}) => {

  // variable de estado 
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // gestionar cuando va a cambiar el elemento
  useEffect(() => {
    if (Object.keys(temaactual).length > 0) {

      setTitulo(temaactual.titulo);
      setDescripcion(temaactual.descripcion);
    }
    return () => {
      settemaactual({});
    };
  }, [temaactual]);

  const updatepost = (e) => {
    // es para que se actualice la pagina 
    e.preventDefault();
    if (Object.keys(temaactual).length > 0) {
      updatetema(
        {
          id: temaactual.id,
          titulo: titulo,
          descripcion: descripcion,
        
        },
        () => {
          setTitulo("");
          setDescripcion("");
          settemaactual({});
     
          getApi();
        }
      );
    } else {
      posttema(titulo,descripcion, () => {
        setTitulo("");
        setDescripcion("");
        getApi();
        closeModal();
      });
    }
  };

  return (
    <div>
        <form>
        <div>
          <div>
            <label>escribe el nombre del tema:</label>
            <input
              name="Titulo"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
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
        </div>
      
        <section>
          <button onClick={(e) => updatepost(e)}>
            {Object.keys(temaactual).length > 0 ? "Editar" : "Agregar"}
          </button>
        </section>
      </form>
    </div>
  )
}

export default TemaForm
