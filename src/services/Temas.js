const baseUrl =
    import.meta.env.VITE_BACKEND_URL
export const getTemas = async () => {
    try {
        const response = await fetch(`${baseUrl}tema`, {
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
export const deletetema= async (id, callback) => {
    const response = await fetch(`${baseUrl}tema/${id}`, {
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
export const updatetema = async (temaactual,callback) => {
    const response = await fetch(`${baseUrl}tema/${temaactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        titulo:temaactual.titulo,
        descripcion:temaactual.descripcion,
    })});
    if(response.ok){
      callback();
    }
  }
  export const posttema = async (titulo,descripcion,callback) => {
    const response = await fetch(`${baseUrl}tema`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
      
        titulo:titulo,
        descripcion:descripcion,
    
    })});
    if(response.ok){
      callback();
    }
  }