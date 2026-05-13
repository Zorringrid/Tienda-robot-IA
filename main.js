//localStorage.clear();

const imagen = document.getElementById("image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const addbuttons = document.querySelectorAll(".add");
const cantidadHTML = document.getElementById("cantidad");
const comprar = document.getElementById("comprar");
const resume = document.querySelector(".resume");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let cantidadtotal = Number(localStorage.getItem("cantidadtotal")) || 0;
cantidadHTML.textContent = cantidadtotal;

const imagenes = {
  Eilik: "img/eilik1.jpg",
  "Eilik azul": "img/eilik1.jpg",
  // "Robot X": "img/robotx.jpg",
};

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
if (imagen && prev && next) {
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
}

if (addbuttons.length > 0) {
  for (const boton of addbuttons) {
    boton.addEventListener("click", () => {
      const selector = boton
        .closest(".description")
        .querySelector(".quantityselector");
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
          img: imagenes[name],
          producto: name,
          price: price,
          cantidad: cantidadSeleccionada,
          total: price * cantidadSeleccionada,
        });
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      localStorage.setItem("cantidadtotal", cantidadtotal);
      console.log(carrito);
      cantidadHTML.textContent = cantidadtotal;
    });
  }
}

if (resume) {
  for (const item of carrito) {
    resume.innerHTML += `
    <div class="resumeitem">
      <img src="${item.img}" class="foto"">
      <div class="info">
        <h4>${item.producto}</h4>
        <p>Precio por unidad: ${item.price}€</p>
        <div class="moreorless"> 
          <button class ="more" data-type="less" data-name="${item.producto}">-</button>       
          <p>${item.cantidad}</p>
          <button class ="more" data-type="more" data-name="${item.producto}" >+</button>
        </div>
        <p>Total: ${item.total}€</p>
        <button class ="more" data-type="delate" data-name="${item.producto}">Eliminar</button>
      </div>
    </div>
  `;
  }
}
const morebuttons = document.querySelectorAll(".more");
if (morebuttons.length > 0) {
  for (const boton of morebuttons) {
    boton.addEventListener("click", () => {
      const type = boton.dataset.type;
      let item = carrito.find((p) => p.producto === boton.dataset.name);
      if (item) {
        if (type === "more") {
          item.cantidad++;
          item.total = item.cantidad * item.price;
          cantidadtotal++;
        } else if (type === "less") {
          item.cantidad--;
          item.total = item.cantidad * item.price;
          cantidadtotal--;
        } else if (type === "delate") {
          carrito = carrito.filter((p) => p.producto !== item.producto);

          cantidadtotal -= item.cantidad;
        }
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      localStorage.setItem("cantidadtotal", cantidadtotal);
      console.log(carrito);
      // cantidadHTML.textContent = cantidadtotal;
      location.reload();
    });
  }
}
