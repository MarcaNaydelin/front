const baseUrl = import.meta.env.VITE_BACKEND_URL;
export const getJuegos = async () => {
  try {
    const response = await fetch(`${baseUrl}juego`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteJuego = async (id, callback) => {
  const response = await fetch(`${baseUrl}juego/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  if (response.ok) {
    callback();
  }
};
export const updateJuego = async (juegoactual, callback) => {
  const response = await fetch(`${baseUrl}juego/${juegoactual.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre_juego: juegoactual.nombre_juego,
      descripcion: juegoactual.descripcion,
      nivel_dificultad: juegoactual.nivel_dificultad,
      imagen: juegoactual.imagen,
      puntuacion: juegoactual.puntuacion,
      id_temas: juegoactual.id_temas,
      id_categorias: juegoactual.id_categorias,
      id_retroalimentaciones: juegoactual.id_retroalimentaciones,
    }),
  });
  if (response.ok) {
    callback();
  }
};
export const postJuego = async (
  nombre_juego,
  descripcion,
  nivel_dificultad,
  imagen,
  puntuacion,
  id_temas,
  id_categorias,
  id_retroalimentaciones,
  callback
) => {
  console.log(
    JSON.stringify({
      nombre_juego: nombre_juego,
      descripcion: descripcion,
      nivel_dificultad: nivel_dificultad,
      imagen: imagen,
      puntuacion: puntuacion,
      id_temas: id_temas,
      id_categorias: id_categorias,
      id_retroalimentaciones: id_retroalimentaciones,
    })
  );
  const response = await fetch(`${baseUrl}juego`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre_juego: nombre_juego,
      descripcion: descripcion,
      nivel_dificultad: nivel_dificultad,
      imagen: imagen,
      puntuacion: puntuacion,
      id_temas: id_temas,
      id_categorias: id_categorias,
      id_retroalimentaciones: id_retroalimentaciones,
    }),
  });
  if (response.ok) {
    callback();
  }
};
