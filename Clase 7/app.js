document.getElementById("form1").addEventListener("submit", registrarCarro)

function registrarCarro(e){
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;

    let carro={
        marca: marca,
        modelo: modelo,
    };
}