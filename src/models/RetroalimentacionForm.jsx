import React from 'react'
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";

import { postretro, updateretro } from '../services/Retroalimentacion';


const RetroalimentacionForm = ({getApi,retroalimentacionactual,setRetroalimentacionactual,closeModal

}) => {

  // variable de estado 
  const [retroalimentacion, setRetroalimentacion] = useState("");

  // gestionar cuando va a cambiar el elemento
  useEffect(() => {
    if (Object.keys(retroalimentacionactual).length > 0) {

      setRetroalimentacion(retroalimentacionactual.retroalimentacion);
    }
    return () => {
      setRetroalimentacionactual({});
    };
  }, [retroalimentacionactual]);

  const updatepost = (e) => {
    // es para que se actualice la pagina 
    e.preventDefault();
    if (Object.keys(retroalimentacionactual).length > 0) {
      updateretro(
        {
          id: retroalimentacionactual.id,
          retroalimentacion: retroalimentacion,
        
        },
        () => {
          setRetroalimentacion("");
          setRetroalimentacionactual({});
          getApi();  
          closeModal();
        }
      );
    } else {
      postretro(retroalimentacion, () => {
        setRetroalimentacion("");
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
            <label>escribe uan retroalimentacion:</label>
            <input
              name="Retroalimentacion"
              type="text"
              value={retroalimentacion}
              onChange={(e) => setRetroalimentacion(e.target.value)}
            />
          </div>
        </div>
      
        <section>
          <button onClick={(e) => updatepost(e)}>
            {Object.keys(retroalimentacionactual).length > 0 ? "Editar" : "Agregar"}
          </button>
        </section>
      </form>
    </div>
  )
}


export default RetroalimentacionForm
