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
  let index = 0;

  document.body.addEventListener("keydown", event => {
    const key = event.key

    codes[index] === key ? index++ : index = 0

    if (index === codes.length) {
      alert("Nice");
      index = 0;
    }
  })
}
