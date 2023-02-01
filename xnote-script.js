const textarea = document.getElementById("textarea");
const noteTitle = document.getElementById("note-title");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");
const toggleThemeButton = document.getElementById("toggle-theme-button");
const noteList = document.getElementById("note-list");

let notes = [];
let selectedNoteIndex = null;

const saveNote = () => {
  if (selectedNoteIndex === null) {
    const note = {
      title: noteTitle.value,
      text: textarea.value,
    };
    notes.push(note);
  } else {
    notes[selectedNoteIndex].title = noteTitle.value;
    notes[selectedNoteIndex].text = textarea.value;
    selectedNoteIndex = null;
  }
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
};

const deleteNote = () => {
  if (selectedNoteIndex !== null) {
    notes.splice(selectedNoteIndex, 1);
    selectedNoteIndex = null;
  }
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
};

const renderNotes = () => {
  noteList.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = note.title;
    li.addEventListener("click", () => {
      selectedNoteIndex = index;
      noteTitle.value = note.title;
      textarea.value = note.text;
    });
    noteList.appendChild(li);
  });
};

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", JSON.stringify(document.body.classList.contains("dark-theme")));
};

saveButton.addEventListener("click", saveNote);
deleteButton.addEventListener("click", deleteNote);
toggleThemeButton.addEventListener("click", toggleTheme);

notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();

if (JSON.parse(localStorage.getItem("theme"))) {
  document.body.classList.add("dark-theme");
}
