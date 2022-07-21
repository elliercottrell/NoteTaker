var list = document.querySelector("#list");

function addToList(name) {
  var option = document.createElement("option");
  option.textContent = name;
  list.appendChild(option);
}

//initialize the list from localStorage

var notes = JSON.parse(localStorage.getItem("notes")) || {
  "my note": "",
};
for (var name in notes) if (notes.hasOwnProperty(name)) addToList(name);

function saveToStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}
var current = document.querySelector("#currentnote");
current.value = notes[list.value];

list.addEventListener("change", function () {
  current.value = notes[list.value];
  saveToStorage();
});

current.addEventListener("change", function () {
  notes[list.value] = current.value;
  saveToStorage();
});

function addNote() {
  var name = prompt("Note name", "");
  if (!name) return;
  if (!notes.hasOwnProperty(name)) {
    notes[name] = "";
    addToList(name);
    saveToStorage();
  }
  list.value = name;
  current.value = notes[name];
}
