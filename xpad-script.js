const textarea = document.getElementById("textarea");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const toggleThemeButton = document.getElementById("toggle-theme-button");
const noteList = document.getElementById("note-list");
let currentNoteTimestamp;

textarea.addEventListener("input", function() {
  saveButton.disabled = false;
});

saveButton.addEventListener("click", function() {
  const note = textarea.value;
  const timestamp = Date.now();

  localStorage.setItem(timestamp, note);
  addToNoteList(timestamp, note);

  textarea.value = "";
  saveButton.disabled = true;
  deleteButton.disabled = true;
});

deleteButton.addEventListener("click", function() {
  localStorage.removeItem(currentNoteTimestamp);
  textarea.value = "";
  saveButton.disabled = true;
  deleteButton.disabled = true;

  const listItems = noteList.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];

    if (listItem.getAttribute("data-timestamp") === currentNoteTimestamp) {
      listItem.remove();
      break;
    }
  }
});

toggleThemeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});

function addToNoteList(timestamp, note) {
  const listItem = document.createElement("li");
  listItem.textContent = note;
  listItem.setAttribute("data-timestamp", timestamp);

  listItem.addEventListener("click", function() {
    currentNoteTimestamp = timestamp;
    textarea.value = localStorage.getItem(timestamp);
    saveButton.disabled = true;
    deleteButton.disabled = false;
  });

  noteList.appendChild(listItem);
}

for (let i = 0; i < localStorage.length; i++) {
  const timestamp = localStorage.key(i);
  const note = localStorage.getItem(timestamp);

  addToNoteList(timestamp, note);
}

saveButton.disabled = true;
deleteButton.disabled = true;
