//Event Hamdling
document.getElementById("showmessage").addEventListener("click", () => {
    const message= document.getElementById("showmessage");
    message.textContent="Button clicked! This is an event in action.";
});

document.getElementById("name").addEventListener("input", (e) =>{
    const Output= document.getElementById("Output")
    Output.textContent=`Hello, ${e.target.value}`;
});

//validation 
document.getElementById("User").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const formMessage = document.getElementById("formMessage");

    if (!email || !password) {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
    } else if (password.length < 6) {
        formMessage.textContent = "Password must be at least 6 characters long!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
    }
});

//show/hide password

document.getElementById("togglePassword").addEventListener("change", (e) => {
    const passwordField = document.getElementById("password");
    passwordField.type = e.target.checked ? "text" : "password";
});