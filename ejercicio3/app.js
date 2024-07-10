// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let ul = document.createElement("ul");

for (const country of countries) {
  let li = document.createElement("li");
  li.innerHTML = country;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let remove = document.querySelector(".fn-remove-me");

remove.innerHTML = "";

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let ul2 = document.createElement("ul");

for (const car of cars) {
  let li2 = document.createElement("li");
  li2.innerHTML = car;
  ul2.appendChild(li2);
}

let divPrintHere = document.querySelector('div[data-function="printHere"]');

divPrintHere.appendChild(ul2);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const cities = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let div = document.createElement("div");

for (const city of cities) {
  let div2 = document.createElement("div");
  let h4 = document.createElement("h4");
  let img = document.createElement("img");

  div2.className = "divcities";
  h4.innerHTML = city.title;
  img.src = city.imgUrl;

  div2.appendChild(h4);
  div2.appendChild(img);
  div.appendChild(div2);
}

document.body.appendChild(div);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const btnRemove = document.createElement("button");
btnRemove.innerHTML = "Borrar último elemento";

document.body.appendChild(btnRemove);

btnRemove.addEventListener("click", () => {
  let lastdiv = document.querySelector("div:last-child");
  lastdiv.remove();
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

let divs = document.querySelectorAll(".divcities");

for (const div of divs) {
  let btnRemovediv = document.createElement("button");
  btnRemovediv.innerHTML = "Clica para borrar este div";
  div.appendChild(btnRemovediv);

  btnRemovediv.addEventListener("click", () => {
    div.remove();
  });
}
