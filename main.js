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

let cantidadtotal = 0;
const botones = document.querySelectorAll(".agregar");
const cantidadHTML = document.getElementById("cantidad");
const comprar = document.getElementById("comprar");
let carrito = [];
for (const boton of botones) {
  boton.addEventListener("click", () => {
    const selector = boton
      .closest(".description")
      .querySelector(".cantidad-selector");
    const cantidadSeleccionada = Number(selector.value);
    const name = boton.dataset.name;
    const price = Number(boton.dataset.price);
    let item = carrito.find((p) => p.producto === boton.dataset.name);
    cantidadtotal += cantidadSeleccionada;
    if (item) {
      item.cantidad += cantidadSeleccionada;
      item.total = item.cantidad * item.price;
    } else {
      carrito.push({
        producto: name,
        price: price,
        cantidad: cantidadSeleccionada,
        total: price * cantidadSeleccionada,
      });
    }
    console.log(carrito);
    cantidadHTML.textContent = cantidadtotal;
  });
}
