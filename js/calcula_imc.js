const botaoadicionar = document.querySelector("#adicionar-paciente")

botaoadicionar.addEventListener("click",function(Event){

    Event.preventDefault();

    const formularioAdiciona = document.querySelector("#form-adiciona")
    
    pacienteNovo={
    inputNome : formularioAdiciona.elements.namedItem("nome").value,
    inputPeso : formularioAdiciona.elements.namedItem("peso").value,
    inputAltura : formularioAdiciona.elements.namedItem("altura").value,
    inputGordura : formularioAdiciona.elements.namedItem("gordura").value,
    }

    console.log(pacienteNovo)
})

