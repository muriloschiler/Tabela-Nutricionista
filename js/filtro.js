const filtroTabela = document.querySelector("#filtrar-tabela")

filtroTabela.addEventListener("input",function(){
    
    filtrarTabela(this.value)

})

function filtrarTabela(expressao){
console.log(expressao)
let regex = new RegExp(expressao,"i")
let pacientes = document.querySelectorAll(".paciente")

    pacientes.forEach(function(paciente){
        tdNome = paciente.querySelector(".info-nome")
        if ( !regex.test(tdNome.textContent) ){
            paciente.classList.add("invisivel")
        }
        else{
            paciente.classList.remove("invisivel")
              
        }
    })

}