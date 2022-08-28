// Tabuada de 9 //

let multiplicador = 9
let n = 10 // multiplicar de 1 a n
let i = 1

while(i<=n){
    let produto = multiplicador * i
    let exibicao = '${multiplicador} x ${i} = ${produto}'
    console.log(exibicao)
    i++
}