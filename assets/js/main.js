
function agregarPendiente(){
    var nPendiente = document.getElementById("nuevoPendiente").value;
    var elemento =document.createElement("dd");
    elemento.innerText = nPendiente;
    document.getElementById("listaSemana").appendChild(elemento);
    
    console.log(nPendiente)
    
    
}