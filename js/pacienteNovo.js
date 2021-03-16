const botaoadicionar = document.querySelector("#adicionar-paciente")

botaoadicionar.addEventListener("click",function(Event){
Event.preventDefault();

    const formularioAdiciona = document.querySelector("#form-adiciona")
   
    //Criacao do novo paciente pelo formulario
    pacienteNovo = criacaoPaciente(formularioAdiciona)
    criaTr(pacienteNovo)
    
})


function criacaoPaciente(formularioAdiciona) {
    pacienteNovo={
        nome : formularioAdiciona.elements.namedItem("nome").value,
        peso : formularioAdiciona.elements.namedItem("peso").value,
        altura : formularioAdiciona.elements.namedItem("altura").value,
        gordura : formularioAdiciona.elements.namedItem("gordura").value,
        }

    return pacienteNovo
}


function criaTr(pacienteNovo){
    //Criacao da TR
    pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    // Criacao dos Tds
    //adicao dos tds na tr
    criacaoTds(pacienteNovo,pacienteTr)

    //Adicao da Tr no Tbody "tabela-pacientes"
    tabelaPacientes = document.querySelector("#tabela-pacientes")
    tabelaPacientes.appendChild(pacienteTr)
}


function criacaoTds(pacienteNovo, pacienteTr){
    // Criacao dos Tds
    nomeTd = document.createElement("td")
    nomeTd.textContent = pacienteNovo.nome
    nomeTd.classList.add("info-nome") 
    
    pesoTd = document.createElement("td")
    pesoTd.textContent = pacienteNovo.peso
    pesoTd.classList.add("info-peso") 

    alturaTd = document.createElement("td")
    alturaTd.textContent = pacienteNovo.altura
    alturaTd.classList.add("info-altura") 

    gorduraTd = document.createElement("td")
    gorduraTd.textContent = pacienteNovo.gordura
    gorduraTd.classList.add("info-gordura") 

    imcTd = document.createElement("td")
    imcTd.classList.add("info-imc")

    //adicao dos tds na tr
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    // Calculo do imc do paciente novo
    preenchimento_tdImc(pacienteNovo,pacienteTr)


}