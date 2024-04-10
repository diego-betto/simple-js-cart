/*
Esercizio 1
Scrivere una funzione JS SommaNumeri() che preso un valore, 
fa la somma da 1 a quel valore e me la restituisce

console.log(SommaNumeri(5)) // 15
*/

function SommaNumeri(numero) {
    let finale = 0;

    for(let i = 0; i <= numero; i++) {
        finale += i;
    }
    return finale;
}

console.log(SommaNumeri(5))

/*
Esercizio 2
Scrivere una funzione per generare un oggetto casa.
Ricevere parametri:
 - indirizzo
 - numero porte
 - superficie in mq

Espone:
 - metodo accendiRiscaldamento() 
 - metodo spegniRiscaldamento()
 - metodo switchaRiscaldamento()
 - metodo statoRiscaldamento() // 'acceso' o 'spento'?
*/

/*
Esercizio 3
Scrivere una funzione per generare un oggetto inquilino.
Riceve parametri:
 - nome
 - anno di nascita

Espone:
 - metodo saluta() // 'Ciao sono <nome>, ho N anni'
*/