const confronta = (a, b) => {
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

 const controllaCampi = () => parseFloat(num1.value) >= 0 && parseFloat(num2.value) >=0

 const eseguiConfronto = (event) => {
    event.preventDefault();
    // l'ideale è mettere `required` sui campi di input
    // per esercizio faccio un controllo via js invece
    if (controllaCampi()) {
        confronta(
            parseFloat(num1.value), 
            parseFloat(num2.value)
        )
    } else {
        risultato.innerText = 'Ue, beline'
    }
 }

 modulo.addEventListener('submit', eseguiConfronto)