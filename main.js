function resta (a, b) {
  return (a - b)
}
console.log(resta(6, 2));






function nota (num) {
  switch (true) {
    case (num <=4) :
      return ('Insuficiente')
      
    case (num >4 && num <= 6) :
      return ('Suficiente')
      
    case (num >6 && num <= 8) :
      return ('Notable')
      
    case (num >8 && num <= 10) :
      return ('Sobresaliente')
      
    default:
      return ' no existe esa nota'
  }
}
console.log(nota(7));







function duplicaNumero (num) {
  if (typeof num === 'number') {
    return num * 2
  } else if (typeof num != "number") {
    return 'Debo ser ejecutada con un número'
}}
console.log(duplicaNumero(6));







function caracterInicial (word) {
 switch (true) {
  case !word || word.length == 0:
    return 'Debo ser ejecutada con un string no vacío'
  case typeof word === 'string':
    return word[0]
  case typeof word != 'string':
    return 'Debo ser ejecutada con un string'
 
  default:
    return 'Algo no está funcionando...'
 }
}
console.log(caracterInicial('Eva'))







function ultimoCaracter (word) {
  switch (true) {
    case !word || word.length == 0:
      return 'Debo ser ejecutada con un string no vacío'
    case typeof word === 'string':
      return word[word.length - 1]
    case typeof word != 'string':
      return 'Debo ser ejecutada con un string'
   
   default:
     return 'Algo no está funcionando...'
  }
 }
 console.log(ultimoCaracter('Javier'))








 function cuentaCaracteres (string) {
    
    if (typeof string == 'string') {
      return string.length
    } else if (typeof string != 'string'){
      return 'Debo ser ejecutada con un string'
    }
 }

 console.log(cuentaCaracteres('Girasol'))







 function esPalindromo (cadenaDeTexto) {
  if (typeof cadenaDeTexto != 'string' || cadenaDeTexto.length == 0) {
    return 'No es un formato correcto'
  } else if (cadenaDeTexto === cadenaDeTexto.reverse){
    return 'Es un palindromo'
  }
}
console.log(esPalindromo('Eva'))








function getPrecioMostrar (textoAPrecio) {
  if (typeof textoAPrecio != 'number') {
    return 'No es un formato correcto'
  } else {
    return `${textoAPrecio.toFixed(2)} €`
  }
}
console.log(getPrecioMostrar(9))







function division (a, b) {
  return a / b
}
console.log(division(10, 5))








let newArray = []
function superiorQueCinco (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5 ) {
      return newArray.push()
    }
  }
}
console.log(superiorQueCinco([1, 40, 3, 80, 5]))











function numeroPrimo (numeroPrompt) {
  let numero = prompt('Escribe un número')
  if (numero % numero == 0 && numero % 1 == 0) {
    return true
  } else {
    return false
  }
}

console.log(numeroPrimo())