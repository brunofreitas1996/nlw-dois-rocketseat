//Procurar o botão 
document.querySelector("#add-time")
//quando clinar no botão
.addEventListener('click', cloneField)


//executar uma ação
function cloneField(){
    //duplicar os campos. Que campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true ou false

    //limpar os campos: que campos/
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo mudar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa o campo
        field.value = ""
    })

    //colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
}