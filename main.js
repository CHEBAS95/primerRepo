const edad = prompt("ingresa tu edad");

if (edad<18) {
    console.log("eres bienbenido")
} else {
    document.getElementById("one").innerHTML="fuera de aca hp";
};

const b = ["rojo","blue",12,121];
b.push(edad);
console.log(b);
