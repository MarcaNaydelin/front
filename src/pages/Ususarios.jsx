import React, { useEffect } from 'react'
import { useState } from 'react';
import { getRegister } from '../services/register';
import { useuserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { UseFech } from "../hooks/useFech";
const Ususarios = () => {
  const { data: users, getApi } = UseFech(getRegister);
  const navigate = useNavigate();
  const { user } = useuserContext();
  return (
   <>
    <div>
      </div>
      <section>
      <h1>Usuarios</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>apellido</th>
              <th>email</th>
              <th>telefono</th>
              <th>password</th>

            </tr>
          </thead>
          <tbody>
          {users.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
              <td>{v.nombre}</td>
              <td>{v.apellido}</td>
              <td>{v.email}</td>
              <td>{v.telefono}</td>
              <td>{v.password}</td>
    
              </tr>
            ))}
          </tbody>
        </table>
        <p> Cantidad de registros {users.length}</p>
      </section>
   </>
  )

          }
export default Ususarios
