import React, { useEffect, useState } from 'react'
import { useModal } from '../hooks/useModal'
import { getTemas , deletetema } from '../services/Temas'
import { UseFech } from '../hooks/useFech'
import styled from 'styled-components'
import CategoriaForm from '../models/CategoriaForm'

const Temafront = () => {

  const [temaactual, settemaactual] = useState({});
  const { getApi, data:tem } = UseFech(getTemas);
  const { openModal, closeModal } = useModal(
  Object.keys(temaactual).length > 0 ? "Editar tema" : "Agregar tema",
      <CategoriaForm
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
   {tem.map((v, i) => (
<div key={i}>
<p>{
v.titulo}</p>
</div> 
   ))}
    </Contenido>
  )
}

export default Temafront;
export const Contenido = styled.article`
width:calc(100% / 3);
border:solid 1px #0005;
height:35vh;
border-radius:2em;
box-sizing:border-box;
& h1{
  background-color:#003148;
border-radius:2em 2em 0 0;
height:50px;
display:flex;
justify-content:center;
align-items:center;
width:100%;
}
& div{
    & p{

        border-bottom:solid 1px #003148;
}

}
`;