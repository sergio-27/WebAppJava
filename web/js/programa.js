//utilizamos ayax
const ajax = new XMLHttpRequest();

const objDiv = document.getElementById("desc");

const URL = "librosController?identificador=";

function mostrarDescripcion() {

    const combo = document.getElementById("libros");

    const idLibro = combo.selectedIndex - 1;

    if (idLibro == -1) {
        //vaciamos el texto
        objDiv.innerHTML = "";
        return false;
    } else {


        //se debe poner una url relativa, con true indicamos el tipo de sincronizacion que queremos
        ajax.open("GET", URL + idLibro, true);
        //callback que realizamos para ejecutar la funcion de respuesta, funcion que se ejecuta en su debido momento
        ajax.onreadystatechange = procesarRespuesta;

        //ejecutamos ajax, ponemos null porque estamos haciendo un GET
        ajax.send(null)
    }


}


function procesarRespuesta() {
    //3 iguales para que sean iguales de tipo y de valor
    if (ajax.readyState === 4) {
        if (ajax.status === 200) {
            const description = ajax.responseText
            paintDescription(description);
        }
    }
}


function paintDescription(description) {


    objDiv.innerHTML = description
}