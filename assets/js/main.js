
function agregarPendiente(){
    var nPendiente = document.getElementById("nuevoPendiente").value;
    var elemento =document.createElement("dd");
    elemento.innerText = nPendiente;
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
    
}