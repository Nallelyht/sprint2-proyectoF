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
function ListaNueva(nombre){
    this.nombre=nombre;
    /*this.nuevaLista = function(){
        var lista = document.getElementById("pendientes");
        var nLista = document.createElement("dl");
        
    }*/
}
/*funcion para crear nueva lista, creo un objeto llamado crear, asigno el nombre con el valor del input nLista, creo un nuevo elemento dl y hr, se envia al html, y se asignan a pendientes*/
function crearLista(){
    var crear = new ListaNueva;
    crear.nombre = document.getElementById("nLista").value;
    var elemento = document.createElement("dl");
    var linea = document.createElement("hr");
    linea.id =
    elemento.innerHTML = crear.nombre 
    document.getElementById("pendientes").appendChild(elemento);
    document.getElementById("pendientes").appendChild(linea)
    
    
    console.log(crear);
}
