const persona = {
    nombre: "ivan isay",
    edad: 37,
    direccion :{
        ciudad: "qro",
        pais: "MX"
    }
};
const {nombre, edad, direccion:{ciudad}} = persona;
console.log("me llamo" + {nombre}, "tengo" + {edad},"y vivo en" +{ciudad});