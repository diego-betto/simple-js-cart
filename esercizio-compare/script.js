const confronta = (a, b) => {
    risultato.innerText = '';

    if (a > b) {
      risultato.innerText = 'il maggiore è A'
    } else if (b > a) {
      risultato.innerText = 'il maggiore è B'
    } else {
      risultato.innerText = 'sono uguali'
    }
 }

 const num1 = document.getElementById('numero1')
 const num2 = document.getElementById('numero2')

 const modulo = document.getElementById('modulo')
 const btn = document.getElementById('invia')
 const risultato = document.getElementById('risultato')

 const eseguiConfronto = (event) => {
    event.preventDefault();
    confronta(
        parseFloat(num1.value), 
        parseFloat(num2.value)
    )
 }

 modulo.addEventListener('submit', eseguiConfronto)