const words = [
  "A",
  "I",
  "i",
  "a",
  "L",
  "l",
  "M",
  "m",
  "T",
  "t",
  "P",
  "p",
  "O",
  "o",
  "Tomate",
  "To",
  "Ti",
  "Ta",
  "To",
  "Si",
  "Se",
  "Sa",
  "So",
  "to",
  "ti",
  "ta",
  "to",
  "si",
  "se",
  "sa",
  "so",
  "Li",
  "li",
  "le",
  "La",
  "la",
  "Lo",
  "lo",
  "Mi",
  "Ma",
  "Me",
  "Mo",
  "Limo",
  "ist",
  "Emma",
  "es",
  "Emil",
  "Tasse",
  "Sessel",
  "Papa",
  "Po",
  "Popo",
  "Papi",
  "Pa",
  "pi",
  "pe",
  "Pippi",
  "Opa",
  "Opi",
  "Timo",
  "isst",
  "malt",
  "tolle",
  "Esel",
  "Salami",
  "Salat",
  "Lisa",
  "Mi",
  "Am",
  "am",
  "im",
  "Im",
  "Lilli",
  "lila",
  "lolli",
  "Milo",
  "Moto",
  "Tami",
  "Timi",
  "Mio",
  "Mia",
  "alt",
  "Lato",
  "Lati",
  "tito",
  "Tesa",
  "See",
  "Lasso",
  "solo",
  "Silo",
  "also",
  "Oli",
  "Lilo",
  "Oma",
  "Omi",
  "Semi",
  "Sami",
  "Soma",
  "Lisa malt Timo",
  "Timo isst Salat",
  "Lisa isst Salami",
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
