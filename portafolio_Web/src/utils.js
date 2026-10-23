//Funcion para obtener las url de las imagenes

export const getImageurl=(path)=>{
    return `${import.meta.env.BASE_URL}assets/${path}`;
}