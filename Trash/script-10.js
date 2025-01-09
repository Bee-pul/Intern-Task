function hail(name){
  return `Hola,${name}`;
}

console.log(hail("Bipul Shrestha"));
console.log(hail("Dmitri"));

// arroww function
const multiply = (a ,b) => a * b;
console.log (multiply(8,6));
console.log (multiply(8,7));
console.log (multiply(8,8));

// event handling
document.getElementById("userForm").addEventListener("submit", (e) =>{
  e.preventDefault();
  const name=
  document.getElementById("name").value;

  document.getElementById("output").innerText=`Hola, ${name}`;
});

//Dynamic content
document.getElementById("changecolor").addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
});