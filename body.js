async function addUser() {
  await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: "Novo Usuário"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  alert("Usuário enviado!");
}

async function deleteUser(id) {
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  });

  alert("Usuário deletado!");
}
