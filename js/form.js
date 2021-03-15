var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click",function(Event) {
    
    Event.preventDefault();

    var form = document.forms.namedItem("form-adiciona");
    var paciente = obtem_paciente_formulario(form)

    /*criando novos elementos para o paciente*/
    var pacienteTr = montaTr(paciente)

    /*Preenchendo a TD do IMC do pacienteTr*/
    preenchimento_tdImc(paciente,pacienteTr)
    
    /* ADCIONANDO O PACIENTE NA TABELA*/
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

})

function obtem_paciente_formulario(form){

    var paciente = {
                /*pegando os valores do form*/
        nome: form.elements.namedItem("nome").value,
        peso : form.elements.namedItem("peso").value,
        altura: form.elements.namedItem("altura").value,
        gordura :form.elements.namedItem("gordura").value,
        imc: calculaImc(self.peso,self.altura)

    }

    return paciente
}    


function montaTr(paciente){
        /*criando novos elementos para o paciente*/

        /*Não consigo colocar as classes nos Td's */
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente")
        var nomeTd = document.createElement("td");
        nomeTd.classList.add("info-nome")
        var pesoTd = document.createElement("td");
        pesoTd.classList.add("info-peso")
        var alturaTd = document.createElement("td");
        alturaTd.classList.add("info-altura")
        var gorduraTd = document.createElement("td");
        gorduraTd.classList.add("info-gordura")
        var imcTd = document.createElement("td")
        imcTd.classList.add("info-imc")
    
        /*Alterando o texto dos elementos criados*/
        nomeTd.textContent = paciente.nome
        pesoTd.textContent = paciente.peso
        alturaTd.textContent = paciente.altura
        gorduraTd.textContent = paciente.gordura
        imcTd.textContent = paciente.imc

        /* Adicionando os TDs no TR*/
        pacienteTr.appendChild(nomeTd)
        pacienteTr.appendChild(pesoTd)
        pacienteTr.appendChild(alturaTd)
        pacienteTr.appendChild(gorduraTd)
        pacienteTr.appendChild(imcTd)

        return pacienteTr
}

/*pegando os valores do form
var novo_nome = form.nome.value
var novo_peso = form.peso.value
var nova_altura=form.aletura.value
var nova_gordura = form.gordura.value
*/



/*  var form = document.forms[0].innerHTML
    var form = document.forms.item(0).innerHTML
    var form = document.forms["form-adiciona"].innerHTML
*/