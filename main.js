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
const botones = document.querySelectorAll(".agregar");
const cantidadHTML = document.getElementById("cantidad");
const comprar = document.getElementById("comprar");
let carrito = "";
for (const boton of botones) {
  boton.addEventListener("click", () => {
    if (carrito === "") {
      cantidad++;
      carrito = {
        producto: boton.dataset.name,
        precio: Number(boton.dataset.price),
        cantidad: cantidad,
        total: cantidad * Number(boton.dataset.price),
      };
    } else if (carrito.producto === boton.dataset.name) {
      cantidad++;
      carrito.cantidad = cantidad;
      carrito.total = carrito.cantidad * Number(boton.dataset.price);
    }
    console.log(carrito);
    cantidadHTML.textContent = cantidad;
  });
}
