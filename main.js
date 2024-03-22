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





 
 let derechaIzquierda = ''

 function esPalindromo (cadenaDeTexto) {

  cadenaDeTexto = cadenaDeTexto.replace(/[.' ',\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()

  console.log(cadenaDeTexto)

  for (let i = cadenaDeTexto.length - 1; i >= 0 ; i--) {
    derechaIzquierda += cadenaDeTexto[i]
    
  }

  if (cadenaDeTexto == derechaIzquierda) {
    return 'Sí es palíndromo'
  } 
  return 'No es palíndromo'
 }

 console.log(esPalindromo('Anita, la gorda lagartona, no traga la droga latina.'))














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








let arrayMayoresQueCinco = []

function obtenerMayoresQueCinco (arrayRandom) {
  for (let i=0; i < arrayRandom.length; i++) {
    if (arrayRandom[i] >= 5){
      arrayMayoresQueCinco.push(arrayRandom[i])
    }
  }
  return arrayMayoresQueCinco
}
console.log(obtenerMayoresQueCinco([30, 20, 10, 2, 4]))











function numeroPrimo () {

  // let numero = +prompt('Escribe un número')
  
  if (isNaN(numero)) {
    return 'Introduzca un número'
  } 

  if (numero == 2 || numero == 3 || numero == 5) {
    return true
  } else if (numero == 1 || numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0) {
    return false
  } 

  return true

}
// console.log(numeroPrimo())


  




