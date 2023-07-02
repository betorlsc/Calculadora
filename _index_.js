import("calculadora.js")

let numeros =[5,10,15,60,8,45,880]

let NumeroMaximo = 0 
let tamano = numeros.length

for (let i = 0 ; i < tamano ; i++){
  if (NumeroMaximo < numeros[i]){
    NumeroMaximo = numeros[i]     
  }
}
  console.log(NumeroMaximo)

let maximo  = Math.max(5,10,15,8,45)
  console.log(maximo)

console.log(calculadora(2,4,'+'))