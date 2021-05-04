document.getElementById("form1").addEventListener("submit", registrarCliente)

function registrarCliente(e){
    let marca = document.getElementById("nombre").value;
    let modelo = document.getElementById("dpi").value;

    let cliente = {
        nombre: nombre,
        dpi: dpi,
    };
    console.log(cliente);

    document.getElementById("form1").reset();
    e.preventDefault();
}