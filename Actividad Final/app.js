document.getElementById("formNotes").addEventListener("submit", registerNote)
   
function registerNote(e) {
    let nombre = document.getElementById("nombre").value;
    let dpi = document.getElementById("dpi").value;
    let carrera = document.getElementById("carrera").value;
    let cumpleaños = document.getElementById("cumpleaños").value;
  
    let note = {
        nombre: nombre,
        dpi: dpi,
        carrera: carrera,
        cumpleaños: cumpleaños,
    };
    console.log(note);
  
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
        let nombre = note.nombre;
        let dpi = note.dpi;
        let cumpleaños = note.cumpleaños;
        let carrera = note.carrera;
        notesView.innerHTML += `
        <div class="card mb-2">
          <div class="row">
            <div class="col">
              <div class="card-body text-center">
                <h4 class="card-title">Nombre: ${nombre}</h4>
                <p class="card-text">DPI: ${dpi}</p>
                <p class="card-text">Cumpleaños: ${cumpleaños}</p>
                <p class="card-text">Carrera: ${carrera}</p>
                <button
                  class="btn btn-danger"
                  onclick="deleteNote('${nombre}')"
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
  
  function deleteNote(nombre) {
    let local = localStorage.getItem("notes");
    let notes = JSON.parse(local);
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].nombre == nombre) {
        notes.splice(i, 1);
      }
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    getNotes();
  }
  
  //Carga de notas inicial
  getNotes();
  