// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const nameInput = document.getElementById("amigo");
const friendList = document.getElementById("listaAmigos");
const choosenOne = document.getElementById("resultado");

let friends = [];

function addFriend() {
  const name = nameInput.value.trim();
  if (name) {
    friends.push(name);
    alert(`Amigo añadido: ${name}`);
    nameInput.value = "";
  } else {
    alert("Por favor, inserte un nombre.");
  }
  displayFriends();
}

function displayFriends() {
  friendList.innerHTML = "";
  friends.forEach((friend) => {
    const li = document.createElement("li");
    li.textContent = friend;
    friendList.appendChild(li);
  });
}

function drawFriend() {
  if (friends.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * friends.length);
  const selectedFriend = friends[randomIndex];
  choosenOne.textContent = `Tu amigo secreto es: ${selectedFriend}`;
}
