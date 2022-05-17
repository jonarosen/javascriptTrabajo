const valorTicket = 200;
function calcularTotal() {
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;

    let desc;
    if (categoria == 1) {
        desc = 80;
    } else if (categoria == 2) {
        desc = 50;
    } else {
        desc = 15;
    }

    let total = cantidad * valorTicket;
    total -= total * desc / 100;

    document.getElementById("total").textContent = total;

}


/*Borrar contenido formulario*/ 


function borrar() {
    document.getElementById("formTickets").reset();
    document.getElementById("total").innerHTML="";
}



function seleccionar(){

    let identificador = this.id;

    document.getElementById("categoria").value = identificador;
}


/*Cargar datos en formulario al seleccionar las tarjetas */


function elegir1() {
    document.getElementById("categoria").value=1;
    document.getElementById("nom").focus();
    document.getElementById("nom").scrollIntoView();
    document.getElementById("cantidad").value=1;
    calcularTotal()
    
    
}

function elegir2() {
    document.getElementById("categoria").value=2;
    document.getElementById("nom").focus();
    document.getElementById("nom").scrollIntoView();
    document.getElementById("cantidad").value=1;
    calcularTotal()
    
    
}

function elegir3() {
    document.getElementById("categoria").value=3;
    document.getElementById("nom").focus();
    document.getElementById("nom").scrollIntoView();
    document.getElementById("cantidad").value=1;
    calcularTotal()
    
    
}


function seleccionar(){
    let numero = this.numerito;
    document.getElementById("categoria").value = numero;
}

/*Volver mayuscualas nombre y apellido*/

function upperCaseNom() {
    const x = document.getElementById("nom");
    x.value = x.value.toUpperCase();
  }

  function upperCaseApe() {
    const x = document.getElementById("ape");
    x.value = x.value.toUpperCase();
  }

  /*Recordatorio para presentar documentacion*/ 

  function alerta(){

    window.alert("Recuerda que deberás mostrar la documentación necesaria para hacer válido el descuento.")
  }




 

