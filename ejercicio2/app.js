// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let div = document.createElement("div");
// div.innerHTML = "ejercicio 2.1";
document.body.appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let div2 = document.createElement("div");
let p = document.createElement("p");
p.innerHTML = "ejercicio 2.2";
div2.appendChild(p);
document.body.appendChild(div2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let div3 = document.createElement("div");

for (i = 0; i < 6; i++) {
  let p2 = document.createElement("p");
  p2.innerHTML = "ejercicio 3. Párrafo número " + (i + 1);
  div3.appendChild(p2);
}

document.body.appendChild(div3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let p3 = document.createElement("p");
p3.innerHTML = "Soy dinámico";
document.body.appendChild(p3);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.querySelector(".fn-insert-here");
h2.innerHTML = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let ul = document.createElement("ul");

for (const app of apps) {
  let li = document.createElement("li");
  li.innerHTML = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let remove = document.querySelectorAll(".fn-remove-me");

for (const node of remove) {
  node.innerHTML = "";
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

let p4 = document.createElement("p");
p4.innerHTML = "Voy en medio!";

div3.insertAdjacentHTML("beforebegin", "<p>Voy en medio!</p>");

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let div4 = document.querySelectorAll("div.fn-insert-here");

for (const node of div4) {
  node.insertAdjacentHTML("beforeend", "<p>Voy dentro!</p>");
}
