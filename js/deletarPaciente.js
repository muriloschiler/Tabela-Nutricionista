pacientes = document.querySelectorAll(".paciente")

pacientes.forEach(adicionarEventoDelete)

function adicionarEventoDelete(paciente){

    paciente.addEventListener("dblclick",function(){
        this.remove()
    })
}