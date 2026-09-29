// 1. Alerta que se muestra al hacer clic en "¡VEN A BURGER TOWN!"
//    (el HTML la llama con el atributo onclick)
function horaDeLaHamburguesa() {
  alert("ES LA HORA DE LA HAMBURGUESA");
}

// 2. console.log al hacer clic en cualquier "¡Burger Town!"
const titulosBurgerTown = document.querySelectorAll(".burger-town");

titulosBurgerTown.forEach(function (titulo) {
  titulo.addEventListener("click", function () {
    console.log("¡Alguien hizo clic en BURGER TOWN!");
  });
});

// 4. Al hacer clic en cualquier "ARROZ", el titular de la foto se pone rojo
const tituloFoto = document.getElementById("titulo-foto");
const palabrasArroz = document.querySelectorAll(".arroz");

palabrasArroz.forEach(function (palabra) {
  palabra.addEventListener("click", function () {
    tituloFoto.style.color = "red";
  });
});