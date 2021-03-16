const tabelaPacientes = document.querySelector("#tabela-pacientes")

tabelaPacientes.addEventListener("dblclick",function(event){
    let pacienteTr = event.target.parentNode
    pacienteTr.remove()
})


/*
pacientes = document.querySelectorAll(".paciente")
pacientes.forEach(adicionarEventoDelete)
function adicionarEventoDelete(paciente){

    paciente.addEventListener("dblclick",function(){
        this.remove()
    })
}*/