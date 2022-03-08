var nome, nota01, nota02;
nome = prompt("Insira o nome do aluno:")
nota01 = prompt("Insira a nota 01:")
nota02 = prompt("Insira a nota 02")

media = (parseInt(nota01) + parseInt(nota02)) / 2

if (media >= 5)
    alert("Aprovado, " + nome)
else
    alert("Reprovado, " + nome)
    