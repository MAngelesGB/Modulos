
/*-------------------------- MODULOS ---------------------*/

//Se inyecta el modulo..
let greet = require('./greet.js');

//Se manda llamar a la funcion greet
greet();

/*-------------------------- Objeto ---------------------*/

//Creacion de objeto
let obj = {}; 
console.log(obj);

//Creación de objeto persona
let persona = {
    nombre: "Carlos", 
    apellido: "Ulibarri", 
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144", 
        colonia: "Centro", 
        cp: 2800, 
        municipio: "Colima"
    },
    getAddress: function () {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
    
}; 
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido); 
console.log(persona.getName()); 
console.log(persona.domicilio); 
console.log(persona.getAddress()); 

