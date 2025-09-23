const productos = {
    {nombre: "laptop", precio: 12000 },
    {nombre: "mouse", precio: 250},
    {nombre: "teclado", precio: 750 },
    {nombre: "monitor", precio: 3000 },
};
const nombres= productos.map(P=>P.precio > 1000).map(p2=>p2.nombre);
console.log(nombres);