function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("Digite quantas vezes será verificada a idade:")
    contador = 0
    while(contador < limite){
        nome = prompt("Digite o nome: ")
        idade = prompt("Digite a sua idade " + nome)
        if(idade > 18)
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " você é menor de idade!"
        contador++
    }
}