export const crearJuegoAPI = async(juegoNuevo) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:3000/juegos`,{
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
        const respuesta = await fetch(`http://localhost:3000/juegos/${id}`)
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}

export const editarJuegoAPI = async(juegoAEditar,id) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:3000/juegos/${id}`,{
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