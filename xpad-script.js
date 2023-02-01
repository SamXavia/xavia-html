const textarea = document.getElementById("textarea");
const noteTitle = document.getElementById("note-title");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const toggleThemeButton = document.getElementById("toggle-theme-button");
const noteList = document.getElementById("note-list");
let currentNoteTitle;

textarea.addEventListener("input", function() {
  saveButton.disabled = false;
});

saveButton.addEventListener("click", function() {
  const note = textarea.value;
  const title = noteTitle.value;

  localStorage.setItem(title, JSON.stringify({ note: note }));
  addToNoteList(title);

  textarea.value = "";
  noteTitle.value = "";
  saveButton.disabled = true;
  deleteButton.disabled = true;
});

deleteButton.addEventListener("click", function() {
  localStorage.removeItem(currentNoteTitle);
  textarea.value = "";
  noteTitle.value = "";
  saveButton.disabled = true;
  deleteButton.disabled = true;

  const listItems = noteList.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];

    if (listItem.textContent === currentNoteTitle) {
      listItem.remove();
      break;
    }
  }
});

toggleThemeButton.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");

  const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  document.cookie = "theme=" + theme;
});

function addToNoteList(title) {
  const listItem = document.createElement("li");
  listItem.textContent = title;

  listItem.addEventListener("click", function() {
    currentNoteTitle = title;
    const data = JSON.parse(localStorage.getItem(title));
    textarea.value = data.note;
    noteTitle.value = title;
    saveButton.disabled = true;
    deleteButton.disabled = false;
  });

  noteList.appendChild(listItem);
}

const themeCookie = document.cookie.split(";").find(function(cookie)
{})