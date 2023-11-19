const words = [
  "gelb",
  "Farbe",
  "Schwester",
  "Bruder",
  "Vater",
  "Mutter",
  "Schreibheft",
  "Geschichte",
  "Ich",
  "Pirat",
  "Palme",
  "Hund",
  "bunt",
  "malen",
  "Pferd",
  "rot",
  "grün",
  "blau",
  "rosa",
  "Rose",
  "Blumen",
  "Mehl",
  "Nudeln",
  "Tomate",
  "Löwe",
  "Der",
  "Die",
  "Das",
  "Natur",
  "Herz",
  "stehen",
  "Honig",
  "Insel",
  "Opa",
  "Laterne",
  "Liebe",
  "freundlich",
  "Eule",
  "Auto",
  "Nashorn",
  "Zebra",
  "Bär",
  "Biene",
  "Stift",
  "Radiergummi",
  "Spitzer",
  "Weihnachten",
  "Nikolaus",
  "Limo",
  "ist",
  "Emma",
  "es",
  "Emil",
  "Tasse",
  "Sessel",
  "Papa",
  "Popo",
  "Papi",
  "Opa",
  "Opi",
  "Timo",
  "isst",
  "malt",
  "tolle",
  "Esel",
  "Salami",
  "Salat",
  "See",
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

setTimeout(() => {
  let i = 0;
  const shuffled = shuffle(words);

  var container = document.getElementById("container");
  var mc = new Hammer(container);
  mc.on("swipeleft", function (ev) {
    if (i == shuffled.length - 1) {
      i = 0;
    }
    content.textContent = shuffled[++i];
  });
  mc.on("swiperight", function (ev) {
    if (i == 0) {
      i = shuffled.length;
    }
    content.textContent = shuffled[--i];
  });

  const content = document.getElementById("content");
  content.textContent = shuffled[++i];

  const backward = document.getElementById("backward");
  const forward = document.getElementById("forward");
  const backw = new Hammer(backward);
  const forw = new Hammer(forward);
  forw.on("tap", function (ev) {
    if (i == shuffled.length - 1) {
      i = 0;
    }
    content.textContent = shuffled[++i];
  });
  backw.on("tap", function (ev) {
    if (i == 0) {
      i = shuffled.length;
    }
    content.textContent = shuffled[--i];
  });

});
