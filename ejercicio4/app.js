// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

let btnToClick = document.createElement("button");
btnToClick.id = "btnToClick";
btnToClick.innerHTML = "Clica";

document.body.appendChild(btnToClick);

btnToClick.addEventListener("click", () => {
  console.log(btnToClick);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

addEventListener("focus", () => {
  let inputFocus = document.querySelector(".focus");
  console.log(inputFocus.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

addEventListener("input", () => {
  let inputValue = document.querySelector(".value");
  console.log(inputValue.value);
});

// 1.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let ul = document.createElement("ul");

for (const album of albums) {
  let li = document.createElement("li");
  li.innerHTML = album;

  ul.appendChild(li);
}

document.body.appendChild(ul);
