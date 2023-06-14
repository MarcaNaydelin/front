const baseUrl =
    import.meta.env.VITE_BACKEND_URL
export const getCategorias = async () => {


    try {
        const response = await fetch(`${baseUrl}categoria`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const deletecategoria= async (id, callback) => {
    const response = await fetch(`${baseUrl}categoria/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
    })
    if (response.ok) {
        callback();
    }
};
export const updatecategoria = async (categoriaactual,callback) => {

    const response = await fetch(`${baseUrl}categoria/${categoriaactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre_categoria:categoriaactual.nombre_categoria,

    })});
    if(response.ok){
      callback();
    }
  }
  export const postcategoria = async (nombre_categoria,callback) => {
    const response = await fetch(`${baseUrl}categoria`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre_categoria:nombre_categoria,

    })});
    if(response.ok){
      callback();
    }
  }