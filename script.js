const content = document.getElementById("content");
content.innerHTML="<p>Hola, amigos. It is dynamically added content.</p>";

// Creating and Appending Elements
document.getElementById("add").addEventListener("click", () => {
    const itemlist = document.getElementById("itemlist");
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${itemlist.children.length + 1}`;
    itemlist.appendChild(newItem);
});

//Removing Elements
document.getElementById("remove").addEventListener("click", () => {
    const itemlist = document.getElementById("itemlist");
    if (itemlist.lastElementChild) {
        itemlist.removeChild(itemlist.lastElementChild);
    }
});

//Updating Element Styles Dynamically
document.getElementById("style").addEventListener("click", () => {
    const items = document.querySelectorAll("#itemlist li");
    items.forEach(item => {
        item.style.color = "blue";
        item.style.fontWeight = "bold";
    });
});

//
document.getElementById("clear").addEventListener("click", () => {
    const itemlist = document.getElementById("itemlist");
    itemlist.innerHTML = ""; 
});