const imagen = document.getElementById("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const fotos = [
  "img/eilik1.jpg",
  "img/eilik2.jpg",
  "img/eilik3.jpg",
  "img/eilik4.jpg",
  "img/eilik5.jpg",
  "img/eilik6.jpg",
];
let indice = 0;

function mostrarFoto() {
  imagen.src = fotos[indice];
}

next.addEventListener("click", () => {
  indice++;
  if (indice >= fotos.length) indice = 0;
  mostrarFoto();
});

prev.addEventListener("click", () => {
  indice--;
  if (indice < 0) indice = fotos.length - 1;
  mostrarFoto();
});

let cantidad = 0;
let total = 0;

const botones = document.querySelectorAll(".agregar");
const cantidadHTML = document.getElementById("cantidad");
const totalHTML = document.getElementById("total");
const comprar = document.getElementById("comprar");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const precio = Number(boton.dataset.precio);

    cantidad++;
    total += precio;

    cantidadHTML.textContent = cantidad;
    totalHTML.textContent = "Total: " + total + "€";
  });
});

comprar.addEventListener("click", () => {
  alert("Compra ficticia realizada. No se ha hecho ningún pago real.");
});
