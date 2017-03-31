/*primera funcion para agregar nuevos pendientes a la primera lista, primero pedimos el valor de nuevoPendiente que va a ser guardado en la variable nPendiente, se crea un nuevo elemento dd, asigno un id a la variable nPendiente, se envia al html con boton para eliminar y se agrega a lista semana */
function agregarPendiente(){
    var nPendiente = document.getElementById("nuevoPendiente").value;
    var elemento =document.createElement("dd");
    elemento.id = nPendiente;
    elemento.innerHTML =nPendiente+" "+"<button onclick='eliminar(this)'> x </button>";
    document.getElementById("listaSemana").appendChild(elemento);
    nPendiente="";
}
/*segunda funcion para agregar nuevos pendientes a la segunda lista, primero pedimos el valor de nuevoPendiente que va a ser guardado en la variable nPendiente, se crea un nuevo elemento dd, asigno un id a la variable nPendiente, se envia al html con boton para eliminar y se agrega a lista semana */
function agregarOtro(){
    var nPendiente = document.getElementById("otrosPendientes").value;
    var elemento =document.createElement("dd");
    elemento.innerHTML = nPendiente+" "+"<button onclick='eliminar(this)'> x </button>";
    document.getElementById("listaOtra").appendChild(elemento);
    nPendiente="";
} 
/*funcion para limpiar las entradas de los inputs*/
function limpiar (){
   document.getElementById("nuevoPendiente").value = "";
   document.getElementById("otrosPendientes").value = "";
   document.getElementById("nLista").value = "";
}
/*funcion para eliminar elementos de listas*/
function eliminar(elemento){
   elemento.parentNode.remove();
}
/*objeto para crear nueva lista*/
var nListaPendientes=[];

function ListaNueva(nombre, id){
    this.id = id
    this.nombre=nombre;
}
    
function Pendiente(id, pendiete){
    this.id=id;
    this.pendiente=pendiente;
    }
    
function crearLista(){
   var nLista = document.getElementById("nLista");
   var cardContainer = document.getElementById("pendientes");
   var listaNueva = new ListaNueva(nLista.value,Date.now());
   nListaPendientes.push(listaNueva)
   var listaHTML = crearListaHTML(listaNueva);
   agregar(listaHTML,cardContainer)
    
    console.log (listaHTML);
}

function crearListaHTML(listaNueva){
    
    var contenedor = document.createElement("dl");
    var h3lista = document.createElement("h3");
    var input = document.createElement("input");
    var boton = document.createElement("button");

    contenedor.id = listaNueva.id;

    input.type = "text";
    input.placeholder="Nuevo Pendiente"


    boton.type = "submit";
    boton.value = "Crear Pendiente";
    boton.onclick = crearPendiente;
    boton.setAttribute("data-lista",listaNueva.id);

    h3lista.innerText = listaNueva.nombre;

    contenedor.appendChild(h3lista);
    contenedor.appendChild(input);
    contenedor.appendChild(boton);

}

function crearPendiente(){
  var pendienteId = this.getAttribute("data-pendiente")
  var textoPendiente = document.getElementById(pendienteId).childNodes
  var inputPendiente = textoPendiente[1].value
  var AgregarPendiente = nListaPendientes.filter(function(pendiente){
    return pendiente.id = pendienteId;
  });
  var lAgregarPendiente = AgregarPendiente[0]

  var pendiente = new Pendiente(Date.now(),inputPendiente);


  lAgregarPendiente.pendientes.push(pendiente)

}


 /*this.ninput= function(){
        
    }*/
    /*this.nuevaLista = function(){
        var lista = document.getElementById("pendientes");
        var nLista = document.createElement("dl");
        
    }*/

/*funcion para crear nueva lista, creo un objeto llamado crear, asigno el nombre con el valor del input nLista, creo un nuevo elemento dl y hr, se envia al html, y se asignan a pendientes*/
/*function crearLista(lista){
    var crear = new ListaNueva;
    crear.nombre = document.getElementById("nLista").value;
    var h3titulo = document.getElementById("h3")
    var elemento = document.createElement("dl");
    var linea = document.createElement("hr");
    var entrada = document.createElement("input");
    var botonEnviar= document.createElement("button");
    
    elemento.id = lista.id;
    entrada.type="text";
    botonEnviar.type="submit";
    botonEnviar.value="Nuevo Pendiente";
    botonEnviar.setAttribute("data-pendiente",lista.id);
    elemento.innerHTML = crear.nombre 
    document.getElementById("pendientes").appendChild(elemento);
    document.getElementById("pendientes").appendChild(linea)
    
    
    console.log(crear);
}*/
