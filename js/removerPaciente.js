const tabelaPacientes = document.querySelector("#tabela-pacientes")

tabelaPacientes.addEventListener("dblclick",function(event){
    
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function(){ 
        event.target.parentNode.remove()
    },500)    
})


/*
pacientes = document.querySelectorAll(".paciente")
pacientes.forEach(adicionarEventoDelete)
function adicionarEventoDelete(paciente){

    paciente.addEventListener("dblclick",function(){
        this.remove()
    })
}*/