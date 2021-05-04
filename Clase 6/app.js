document.getElementById("formNotes").addEventListener("submit", registerNote);

function registerNote(e) {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date").value;

  let note = {
    name: name,
    description: description,
    date: date,
  };

  let local = localStorage.getItem("notes");
  let notes = [];
  if (local != null) {
    notes = JSON.parse(local);
  }
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  getNotes();
  document.getElementById("formNotes").reset();
  e.preventDefault();
}

function getNotes() {
  let local = localStorage.getItem("notes");
  let notes = JSON.parse(local);
  let notesView = document.getElementById("notes");
  notesView.innerHTML = "";
  //RECCORER LA LISTA DE NOTAS
  if (notes != null) {
    notes.forEach((note) => {
      let name = note.name;
      let description = note.description;
      let date = note.date;
      notesView.innerHTML += `
      <div class="card mb-2">
        <div class="row">
          <div class="col">
            <div class="card-body text-center">
              <h4 class="card-title">Name: ${name}</h4>
              <p class="card-text">Description: ${description}</p>
              <p class="card-text">Date: ${date}</p>
              <button
                class="btn btn-danger"
                onclick="deleteNote('${name}')"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    });
  }
}

function deleteNote(name) {
  let local = localStorage.getItem("notes");
  let notes = JSON.parse(local);
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].name == name) {
      notes.splice(i, 1);
    }
  }
  localStorage.setItem("notes", JSON.stringify(notes));
  getNotes();
}

//Carga de notas inicial
getNotes();