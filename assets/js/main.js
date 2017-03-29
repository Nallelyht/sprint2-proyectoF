
function agregarPendiente(){
    var nPendiente = document.getElementById("nuevoPendiente").value;
    var elemento =document.createElement("dd");
    elemento.id = nPendiente;
    elemento.innerHTML =nPendiente+" "+"<button onclick='eliminar(this)'> x </button>";
    document.getElementById("listaSemana").appendChild(elemento);
    nPendiente="";
}
function agregarOtro(){
    var nPendiente = document.getElementById("otrosPendientes").value;
    var elemento =document.createElement("dd");
    elemento.innerText = nPendiente;
    document.getElementById("listaOtra").appendChild(elemento);
    nPendiente="";
} 
function limpiar (){
   document.getElementById("nuevoPendiente").value = "";
   document.getElementById("otrosPendientes").value = "";
   document.getElementById("nLista").value = "";
    
}
function eliminar(elemento){
   elemento.parentNode.remove();
}
function ListaNueva(nombre){
    this.nombre=nombre;
    this.nuevaLista = function(){
        var lista = document.getElementById("pendientes");
        var nLista = document.createElement("dl");
        
    }
}