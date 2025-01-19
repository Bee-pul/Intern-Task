//Store & Retrieve
localStorage.setItem("username","Bipul Shrestha");

const username= localStorage.getItem("username");
console.log(`Stored username: ${username}`);

//Clear
document. getElementById("Clear").addEventListener("click", () => {
    localStorage.clear();
    console.log("Local Storage Cleared");
    
});

//Session Data Store & Retrieve
sessionStorage.setItem("Toyota","Supra");

const Car = sessionStorage.getItem("Toyota");
console.log(`Stored Session Value: ${Car}`);

//app
document.getElementById("storageForm").addEventListener("submit",(e) => {
    e.preventDefault();
    const name = document. getElementById("name").value;
    const storageType= document.querySelector('input[name="storageType"]:checked').value;

    if(storageType == "Local"){
        localStorage.setItem("name",name);
        alert("Name saved to Local Storage!");
    }else if(storageType == "Session"){
        sessionStorage.setItem("name",name);
        alert("Name saved to Session Storage!");
    }

document.getElementById("output").textContent = `Hello, ${name}`;
});

//Display stored data
window.addEventListener("load", () =>{
    const storedName = localStorage.getItem("name")  || sessionStorage.getItem("name");
    if (storedName) {
        document. getElementById("output").textContent = `welcome back, ${storedName}`;
    }
});