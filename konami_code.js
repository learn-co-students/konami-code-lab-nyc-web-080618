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
  var counter = 0;
  document.body.addEventListener('keydown', function(key){
    if(codes[counter] === key.key){
      counter += 1
      if (codes.length === counter){
        alert("Great!")
        counter = 0
      }
    } else {
      counter = 0
    }

  })
}

  // your code here
