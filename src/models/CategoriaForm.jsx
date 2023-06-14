import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";

import { postcategoria,updatecategoria } from "../services/Categorias";

const CategoriaForm = ({getApi,categoriaactual,setCategoriaactual,closeModal

}) => {

  // variable de estado 
  const [nombre_categoria, setNombre_categoria] = useState("");

  // gestionar cuando va a cambiar el elemento
  useEffect(() => {
    if (Object.keys(categoriaactual).length > 0) {

      setNombre_categoria(categoriaactual.nombre_categoria);
    }
    return () => {
      setCategoriaactual({});
    };
  }, [categoriaactual]);

  const updatepost = (e) => {
    // es para que se actualice la pagina 
    e.preventDefault();
    if (Object.keys(categoriaactual).length > 0) {
      updatecategoria(
        {
          id: categoriaactual.id,
          nombre_categoria: nombre_categoria,
        
        },
        () => {
          setNombre_categoria("");
          setCategoriaactual({});
          getApi();
        }
      );
    } else {
      postcategoria(nombre_categoria, () => {
        setNombre_categoria("");
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
            <label>escribe el nombre de la categoria:</label>
            <input
              name="Nombre"
              type="text"
              value={nombre_categoria}
              onChange={(e) => setNombre_categoria(e.target.value)}
            />
          </div>
        </div>
      
        <section>
          <button onClick={(e) => updatepost(e)}>
            {Object.keys(categoriaactual).length > 0 ? "Editar" : "Agregar"}
          </button>
        </section>
      </form>
    </div>
  )
}


export default CategoriaForm



