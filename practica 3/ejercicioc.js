function simularPeicion(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("datos recibidos correctamente");
        }, 5000);
    })
}

async function obtenerDatos() {
    const totalD = await simularPeicion();
    console.log(totalD);
    
}
obtenerDatos();