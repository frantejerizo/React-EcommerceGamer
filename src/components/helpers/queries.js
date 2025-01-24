export const crearJuegoAPI = async(juegoNuevo) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:5173/juegos`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(juegoNuevo)
        })
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}

export const obtenerUnSoloJuegoAPI = async(id) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:5173/juegos/${id}`)
        if (respuesta.ok) {
            const datos = await respuesta.json();
            setVideojuegos(datos);
        }
        return respuesta
    }
    catch (error)
    {
        
        return false
    }
}

export const editarJuegoAPI = async(juegoAEditar,id) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:5173/juegos/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(juegoAEditar)
        })
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}

export const borrarJuegoAPI = async (id) => {
    try {
        
        const respuesta = await fetch(`http://localhost:5173/juegos/${id}`, {
            method: "DELETE",
        });

       
        return respuesta;
    } catch (error) {
        console.error("Error al eliminar el videojuego:", error);
        return false; 
    }
};
