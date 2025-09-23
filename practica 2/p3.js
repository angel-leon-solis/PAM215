const personas{
    {nombre: "ana", edad : 22},
    {nombre: "luis", edad : 35},
    {nombre: "maria", edad : 28},
};

const encontrarPersona = personas.find(persona => persona.nombre === luis);
console.log(encontrarPersona);

personas.forEach(persona => {
    console.log("nombre"+ [persona.nombre], "edad" + [persona.edad]);
    
});

const totaledad = personas.reduce((total,persona) => total + persona.edad, 0);
console.log("edad total " + totaledad);