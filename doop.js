let pope = document.getElementById("tero");


fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
        let pep = document.createElement("li");
      pep.textContent = user.name;   // Correct way
      pope.appendChild(pep);
    });
  });
