const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  let list = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    list = (codes[list] === key) ? ++list : 0


    if (list === codes.length) {
      window.alert("Hurray!");
      list = 0
    }

  });
}
