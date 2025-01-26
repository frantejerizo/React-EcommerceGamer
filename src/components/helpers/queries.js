export const crearJuegoAPI = async(juegoNuevo) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:5174/juegos`,{
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

export const listarProductosAPI = async () => {
    try {
        // Hacemos la solicitud GET al servidor
        const respuesta = await fetch('http://localhost:3000/juegos');

        // Verificamos si la respuesta es exitosa (código 200-299)
        if (!respuesta.ok) {
            throw new Error(`Error al obtener los juegos: ${respuesta.statusText}`);
        }

        // Convertimos la respuesta a JSON
        const datos = await respuesta.json();

        // Devolvemos los datos parseados
        return datos;
    } catch (error) {
        console.error("Error en listarProductosAPI:", error);
        return false; // Devuelve false en caso de error
    }
};

export const obtenerUnSoloJuegoAPI = async(id) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:5174/juegos/${id}`)
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
        const respuesta = await fetch(`http://localhost:5174/juegos/${id}`,{
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
        
        const respuesta = await fetch(`http://localhost:5174/juegos/${id}`, {
            method: "DELETE",
        });

       
        return respuesta;
    } catch (error) {
        console.error("Error al eliminar el videojuego:", error);
        return false; 
    }
};
