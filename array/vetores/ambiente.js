let num = [5, 8, 2, 9, 3]
/*
----------Jeito mais simplificado---------------------
for (let pos in num) {
    console.log(num[pos])
}
-----------Jeito mais fácil----------------------------

for (var x = 0; x < num.length; x++)
 {
console.log(`A posição ${x} tem o valor ${num[x]}`)
}
-----------Jeito mais difícil--------------------------
num.indexOf(9) ---> Mostra a posição do valor (9)
num.sort() ---> Organiza
num.push(1) ---> Adiciona um valor na última posição
num.length ---> Conta os valores.
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[3]}`)
*/