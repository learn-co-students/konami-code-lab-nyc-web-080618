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
  // your code here
  document.body.addEventListener('keydown', function(event){
    const key = event.key;

    if(key === codes[index]){
      index++;
      if(index === codes.length){
        alert("Wow you pressed all the weird key. Congrats.");

        index = 0;
      }
    } else {
      console.log(key);

      index = 0;
    }
  });
}
