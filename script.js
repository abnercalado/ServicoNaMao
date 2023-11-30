Enviar_dados = () => {

var ne = String(document.getElementById("nome_empresa").value)
var ec = String(document.getElementById("email_cadastro").value)
var nc = String(document.getElementById("numero_cadastro").value)
var d = String(document.getElementById("descrição").value)
var sp = String(document.getElementById("tipo_de_serviço").value)

let contas = []

if(localStorage.hasOwnProperty('contas')){
        
    agendamento = JSON.parse(localStorage.getItem('contas'))
}

    contas.push({Nome: ne, Email: ec, Número: nc, Descrição: d, Serviço: sp})

    localStorage.setItem("contas", JSON.stringify(contas))

    console.log(contas)

}

buscar = () => {
    let buscar = String(document.getElementById("buscar").value)
    if(buscar == null){
        return `Nenhum valor selecionado`
    }
    else{
        document.body.childNodes[3].style.display = "none"
        document.body.childNodes[5].style.display = "none"
        document.body.childNodes[7].style.display = "none"
    
        //let resultado = localStorage.getItem("conta")
        //let conta = JSON.parse(resultado)
        let conta = JSON.parse(localStorage.getItem("conta"))

        let nome = document.getElementById("nomeStorage")
        let descricão = document.getElementById("descriçãoStorage")
    
        nome.innerHTML = conta.Nome
        descricão.innerHTML = conta.Descrição
    }
}
//console.log(document.body.childNodes)
//document.body.childNodes[9].style.display = "none"

Limpar_dados = () => 


{
    document.getElementById("nome_empresa").value = ``
    document.getElementById("email_cadastro").value = ``
    document.getElementById("numero_cadastro").value = ``
    document.getElementById("descrição").value = ``
    document.getElementById("tipo_de_serviço").value = ``
}