//array
const fruits=["Apple", "Blueberry","cranberry","Dragon fruit"];
console.log(fruits);

//push and pop
fruits.push("Banana");
console.log(fruits); 
fruits.pop();
console.log(fruits); 
// console.log(`First Fruit: ${fruits[0]}, Last Fruit: ${fruits[frutis.length  -1]}`);

//loop
const fruitlist = document.getElementById("fruitlist");
fruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitlist.appendChild(li);
});

//number generator
document.getElementById("generate").addEventListener("click", () => {
  const numberList = document.getElementById("no.List");
  numberList.innerHTML = ""; 
  for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      const li = document.createElement("li");
      li.textContent = randomNum;
      numberList.appendChild(li);
  }
});



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