const products=[
    {id:1, Name:"Laptop", price:800},
    {id:1, Name:"Smartphone", price:400},
    {id:1, Name:"tablet", price:350},
];
console.log(products);
products.forEach(product => {
console.log(`product: ${product.Name}, price: ${product.price}`);

});

//fetch data
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error fetching data:", error));

//Display API on the webpage

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    const userlist= document. getElementById("userlist");
    userlist.innerHTML= users
    .map(user => `
        <div>
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
        </div>`)
        .join("");
})
.catch(error => console.error("Error Fetching Data:", error));

//reload data

document. getElementById("reload") .addEventListener ("click",() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const userlist= document.getElementById("userlist");
        userlist.innerHTML=users
        .map(user =>`
            <div>
            <h3>${user.name}</h3>
            <p> Email:${user.email}</p>
            <p> Address:${user.address.street}, ${user.address.city}
            </div> `)
            .join(" ");
    })
    .catch(error => console.error("Fetching Data Error", error));
    
})
