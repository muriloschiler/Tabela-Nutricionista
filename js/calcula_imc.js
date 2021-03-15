const botaoadicionar = document.querySelector("#adicionar-paciente")

botaoadicionar.addEventListener("click",function(Event){

    const formularioAdiciona = document.querySelector("#form-adiciona")
    
    let inputNome = formularioAdiciona.elements.namedItem("nome").value
    let inputPeso = formularioAdiciona.elements.namedItem("peso").value
    let inputAltura = formularioAdiciona.elements.namedItem("altura").value
    let inputGordura = formularioAdiciona.elements.namedItem("gordura").value

})