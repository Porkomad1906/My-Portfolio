//Funcion para obtener las url de las imagenes

export const getImageurl=(path)=>{
    return new URL(`/assets/${path}`, import.meta.url).href;
}