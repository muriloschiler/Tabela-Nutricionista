const pacientes = document.querySelectorAll(".paciente")

for (i=0;i<pacientes.length; i++){
    let pacienteTr = pacientes[i]

    let pesoTd = pacienteTr.querySelector(".info-peso")
    let alturaTd = pacienteTr.querySelector(".info-altura")

    paciente = {}
    paciente.peso = pesoTd.textContent
    paciente.altura = alturaTd.textContent


    preenchimento_tdImc(paciente, pacienteTr)

}


function preenchimento_tdImc(paciente,pacienteTr) {
    
    tdImc = pacienteTr.querySelector(".info-imc")

    let pesoValido = true;
    let alturaValida = true;
    
        if(paciente.peso<=0 || paciente.peso >= 500){        
            tdImc.textContent = "Peso invalido";
            pesoValido = false;
            pacienteTr.classList.add("paciente-invalido")
        }


        if(paciente.altura<=0 || paciente.altura >= 3.0){
            tdImc.textContent = "Altura invalida";
            alturaValida = false;
            pacienteTr.classList.add("paciente-invalido")
        }


        if( !pesoValido && !alturaValida){
            tdImc.textContent = "Peso e Altura inválidos"
            pacienteTr.classList.add("paciente-invalido")
        }

        if(pesoValido && alturaValida){

            var imc = calculaImc(paciente.peso,paciente.altura)
            tdImc.textContent = imc
        }


}
    

function calculaImc(peso,altura) {
    let imc = peso / (altura*altura)
    return imc.toFixed(2)
}
    



