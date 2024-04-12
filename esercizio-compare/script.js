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

 const controllaCampi = () => {
    let tuttoOk = true;

    // controlli
    if (num1.value === '') {
        tuttoOk = false;
        num1.classList.add('errore')
    } else {
        num1.classList.remove('errore')
    }

    if (num2.value === '') {
        tuttoOk = false;
        num2.classList.add('errore')
    } else {
        num2.classList.remove('errore')
    }

    if (tuttoOk) {
        risultato.classList.remove('errore')
    } else {
        risultato.classList.add('errore')
    }

    return tuttoOk;
 }

 const eseguiConfronto = (event, prevent = true) => {
    if (prevent){
        event.preventDefault();
    }
    // l'ideale è mettere `required` sui campi di input
    // per esercizio faccio un controllo via js invece
    if (controllaCampi()) {
        confronta(
            parseFloat(num1.value), 
            parseFloat(num2.value)
        )
    } else {
        risultato.innerText = 'Compila i campi necessari'
    }
 }

 modulo.addEventListener('keyup', eseguiConfronto)
 modulo.addEventListener('submit', eseguiConfronto)