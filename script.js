const student = {
  name: "Bipul Shrestha",
  age: 22,
  fields: ["WEb dev", "Designing", "Editing"],
  welcome() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old. I like to work on ${this.fields} projects.`;
  },
};
console.log(student.welcome());

//Display Object Properties on the Webpage
const Info = document.getElementById("stdinfo");
stdinfo.innerHTML = `
    <p>Name: ${student.name}</p>
    <p>Age: ${student.age}</p>
    <p>fields:</p>
    <ul>
        ${student.fields.map(fields => `<li>${fields}</li>`).join("")}
    </ul>
`;

// Add Interactivity to Objects

document.getElementById("update").addEventListener("click", () => {
  student.age += 1;
  stdinfo.innerHTML = `
      <p>Name: ${student.name}</p>
      <p>Age: ${student.age}</p>
      <p>fields:</p>
      <ul>
          ${student.fields.map(fields => `<li>${fields}</li>`).join("")}
      </ul>
  `;
});