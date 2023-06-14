import React, { useEffect, useState } from 'react'
import { useModal } from '../hooks/useModal'

import { getCategorias , deletecategoria } from '../services/Categorias'
import { UseFech } from '../hooks/useFech'
import styled from 'styled-components'
import CategoriaForm from '../models/CategoriaForm'

const Categoria = () => {

  const [categoriaactual, setCategoriaactual] = useState({});
  const { getApi, data:cat } = UseFech(getCategorias);
  const { openModal, closeModal } = useModal(
  Object.keys(categoriaactual).length > 0 ? "Editar Categoria" : "Agregar categoria",
      <CategoriaForm
        getApi={getApi}
        categoriaactual={categoriaactual}
        setCategoriaactual={setCategoriaactual}
        closeModal={() => {
          closeModal();
        }}
      />
    );
    
    useEffect(() => {
      if (Object.keys(categoriaactual).length > 0) {
        openModal();
      }
    }, [categoriaactual]);

  return (
    <div>
         <table>
                <thead>
                  <tr>
                    <th data-label="Nº">Nº</th>
                    <th data-label="CIUDAD">nombre categoria</th>
              
                    <th data-label="ACCIONES">
                    ACCIONES
                    </th>
                  </tr>
                </thead>
                {cat.map((v, i) => (
                    <tbody key={i}>
                      <tr>
                        <th data-label="Nº">{i + 1}</th>
                        <th data-label="CIUDAD">{v.nombre_categoria}</th>
                        <th data-label="ACCIONES">
                            <div>
                                <button
                                  onClick={() => {
                                    setCategoriaactual(v);
                                  }}
                                >
                                  Editar
                                </button>
                            </div>
                            <div>
                                <button  onClick={() => {
                                  deletecategoria(v.id, getApi);
                                }}>Eliminar</button>
                            </div>
                        </th>
                      </tr>
                    </tbody>
                  ))}
</table>
<button onClick={openModal}> agregar</button>

    </div>
  )
}

export default Categoria
