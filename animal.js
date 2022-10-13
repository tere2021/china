
class Animal {
    constructor(...animal){
        this.nombre = animal[0];
        this.duenia = animal[1];
        this.raza = animal[2];
        this.edad = animal[3];
        this.actividades = animal[4];
        this.comida = animal[5];
        this.visitaVeterinario = animal[6];
        this.vacunas =  animal[7]
    };
}

//creo mi objeto
let gato = new 
Animal("China",
     "Gisele",
      "mestiza",
       6, 
       "jugar y dormir",
       "alimento",
       "Sep/22",
        ["moquillo", "higado", "alergia"]);
console.log(gato);

 
// paso a html
const titulo = document.querySelectorAll(".titulo");
titulo[0].textContent = gato.nombre;

const datos= document.querySelectorAll(".datos");
datos[0].textContent = "Dueña: " + gato.duenia;
datos[1].textContent = "Raza: " + gato.raza;
datos[2].textContent = "Edad: " + gato.edad;
datos[3].textContent = "Actividades: " + gato.actividades;
datos[4].textContent = "Visita al Veterinario: " + gato.visitaVeterinario;
datos[5].textContent = "Vacunas: ";

const lista = document.querySelector("ul");

gato.vacunas.forEach(vacuna => {
    const li = document.createElement('li');
    li.textContent = vacuna;
    lista.appendChild(li);
});