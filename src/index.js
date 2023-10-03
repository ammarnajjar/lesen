const words = ["to", "Timo malt tolle Esel", "Timo", "Salami", "Lisa"];

setTimeout(() => {
  var container = document.getElementById("container");
  var content = document.getElementById("content");
  var mc = new Hammer(container);
  let i = 0;
  content.textContent = words[++i];
  mc.on("tap swipeleft", function (ev) {
    if (i == words.length - 1) {
      i = 0;
    }
    content.textContent = words[++i];
  });
  mc.on("swiperight", function (ev) {
    if (i == 0) {
      i = words.length;
    }
    content.textContent = words[--i];
  });
});
