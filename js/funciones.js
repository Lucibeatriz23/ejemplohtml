//declarar una funcion
const saludo = () => {

    let nombre;
    let aPaterno;
    let aMaterno;
    let email;
    let telefono;
    let municipio;
    let colonia;


    nombre = document.getElementById('nombre').value;
    aPaterno = document.getElementById('apellidoPaterno').value;
    aMaterno = document.getElementById('apellidoMaterno').value;
    email = document.getElementById('email').value;
    telefono = document.getElementById('telefono').value;
    municipio = document.getElementById('municipio').value;

    let seleccionados = 0;

    for (let i = 1; i <= 4; i++) {

        if (document.getElementById('opcion' + i).checked == true) {
            // console.log('la opcion' + i + 'esta seleccionada');
            seleccionados++;
        }

    }



    //concatenar
    console.log('El nombre es: ' + nombre);
    console.log('El apellido paterno  es: ' + aPaterno);
    console.log('El apellido materno es: ' + aMaterno);
    console.log('El email es: ' + email);
    console.log('El telefono  es: ' + telefono);




    if (nombre.length == 0) {
        alert('Escribe el nombre');
        return false;

    }

    if (aPaterno.length == 0) {
        alert('escribe el  apellido paterno');
        return false;

    }
    if (aMaterno.length == 0) {
        alert('Escribe el apellido materno');
        return false;

    }

    if (email.length == 0) {
        alert('escribe tu email');
        return false;

    }
    if (telefono.length == 0) {
        alert('Escribe tu telefono');
        return false;

    }

    if (municipio == 0) {
        alert('Seleccione un municipio');
        return false;

    }

    if (municipio == 1) {


        colonia = document.getElementById('colonia').value;

        if (colonia.length == 0) {
            alert('Escribe tu colonia');
            return false;
        }

    }

    if (seleccionados == 0) {
        alert('selecciona un lenguaje de programacion');
        return false;
    }

    document.getElementById('mostrarMensaje').style.display = "block";

    // alert('gracias por llenar el formulario');
}

const mostrarColonia = (idMunicipio) => {
    if (idMunicipio == 1) {
        document.getElementById('mostrarColonia').style.display = "block";
    } else {
        document.getElementById('mostrarColonia').style.display = "none";
    }
}