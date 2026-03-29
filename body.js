
    const btn = document.createElement("button");
    btn.textContent = "Excluir";

    btn.onclick = () => deleteUser(user.id);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

async function addUser() {
  const input = document.getElementById("nameInput");

  if (!input.value) return;

  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      name: input.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const newUser = await response.json();

  users.push(newUser); // adiciona na tela
  input.value = "";
  render();
}

// ❌ Deletar usuário (API + tela)
async function deleteUser(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  users = users.filter(user => user.id !== id);
  render();
}

loadUsers();
