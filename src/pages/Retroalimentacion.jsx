import React, { useEffect, useState } from 'react'
import { useModal } from '../hooks/useModal'

import { UseFech } from '../hooks/useFech'
import styled from 'styled-components'
import { getretroalimebntacion,deletretro } from '../services/Retroalimentacion'
import RetroalimentacionForm from '../models/RetroalimentacionForm'

const Retroalimentacion = () => {
  const [retroalimentacionactual , setRetroalimentacionactual]= useState("");
  const {getApi,data:retro}=UseFech(getretroalimebntacion);
  const { openModal, closeModal } = useModal(
    Object.keys(retroalimentacionactual).length > 0
      ? "Editar "
      : "Agregar ",
    <RetroalimentacionForm
      getApi={getApi}
      retroalimentacionactual={retroalimentacionactual}
      setRetroalimentacionactual={setRetroalimentacionactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(retroalimentacionactual).length > 0) {
      openModal();
    }
  }, [retroalimentacionactual]);


  return (
    <div>
      <table>
                <thead>
                  <tr>
                    <th data-label="Nº">Nº</th>
                    <th data-label="CIUDAD">retroalimentacion</th>
                    <th data-label="CIUDAD">juegos</th>
                    <th data-label="ACCIONES">
                    ACCIONES
                    </th>
                  </tr>
                </thead>
                {retro.map((v, i) => (
                    <tbody key={i}>
                      <tr>
                        <th data-label="Nº">{i + 1}</th>
                        <th data-label="CIUDAD">{v.retroalimentacion}</th>
                        <th data-label="CIUDAD">{v.id_juegos}</th>
                        <th data-label="ACCIONES">
                            <div>
                                <button
                                  onClick={() => {
                                    setRetroalimentacionactual(v);
                                  }}
                                >
                                  Editar
                                </button>
                            </div>
                            <div>
                                <button  onClick={() => {
                                  de(v.id, getApi);
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

export default Retroalimentacion
