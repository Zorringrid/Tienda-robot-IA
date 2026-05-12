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
